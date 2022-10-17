<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

use App\Models\Discount;
use App\Models\Author;
use App\Models\Review;

class Book extends Model
{
    use HasFactory;

    public $timestamps = false;
    protected $table = 'book';

    public $fillable = [
        'category_id',
        'author_id',
        'book_title',
        'book_summary',
        'book_price',
        'book_cover_photo'
    ];

    public function author() {
        return $this->belongsTo(Author::class);
    }

    public function discount() {
        return $this->hasOne(Discount::class);
    }

    public function reviews() {
        return $this->hasMany(Review::class);
    }

    public function scopeGetSaleBooks($query) {
        return $query
            ->leftJoin('author', 'book.author_id', 'author.id')
            ->leftJoin('discount', 'book.id', 'discount.book_id')
            ->where([
                ['discount.discount_start_date', '<=', now()->subDays()],
                ['discount.discount_end_date', '>=', now()->subDays()]
            ])->orWhere([
                ['discount.discount_start_date', '<=', now()->subDays()],
                ['discount.discount_end_date', NULL]
            ])
            ->selectRaw('
                book.id,
                book.book_title, 
                book.book_cover_photo,
                author.author_name,
                book.book_price,
                discount.discount_price,
                book.book_price - discount.discount_price AS sub_price
            ')
            ->orderBy('discount.discount_price', 'DESC')
            ->orderBy('sub_price', 'ASC');
    }

    public function scopeGetRecommendBooks($query) {
        return $query
            ->leftJoin('author', 'book.author_id', 'author.id')
            ->leftJoin('discount', 'book.id', 'discount.book_id')
            ->join('review', 'book.id', 'review.book_id')
            ->selectRaw('
                book.id,
                book.book_title, 
                book.book_cover_photo,
                author.author_name,
                book.book_price,
                CASE
                    WHEN discount.discount_start_date >= NOW() THEN book.book_price
                    WHEN discount.discount_end_date <= NOW() THEN book.book_price
                    WHEN discount.discount_end_date IS NULL THEN book.book_price
                    ELSE book.book_price - discount.discount_price
                END AS sub_price,
                AVG(review.rating_start) AS avg_star
            ')
            ->groupBy('book.id', 'review.book_id', 'author.id', 'discount.id')
            ->orderBy('avg_star', 'DESC')
            ->orderBy('sub_price', 'ASC')
            ->orderBy('book.book_price', 'ASC');
    }

    public function scopeGetPopularBooks($query) {
        return $query
            ->leftJoin('author', 'book.author_id', 'author.id')
            ->leftJoin('discount', 'book.id', 'discount.book_id')
            ->join('review', 'book.id', 'review.book_id')
            ->selectRaw('
                book.id,
                book.book_title, 
                book.book_cover_photo,
                author.author_name,
                book.book_price,
                CASE
                    WHEN discount.discount_start_date >= NOW() THEN book.book_price
                    WHEN discount.discount_end_date <= NOW() THEN book.book_price
                    WHEN discount.discount_end_date IS NULL THEN book.book_price
                    ELSE book.book_price - discount.discount_price
                END AS sub_price,
                COUNT(review.book_id) AS total_review
            ')
            ->groupBy('book.id', 'review.book_id', 'author.id', 'discount.id')
            ->orderBy('total_review', 'DESC')
            ->orderBy('sub_price', 'ASC')
            ->orderBy('book.book_price', 'ASC');
    }

    public function scopeGetAllBooks($query) {
        return $query
            ->leftJoin('author', 'book.author_id', 'author.id')
            ->leftJoin('discount', 'book.id', 'discount.book_id')
            ->join('review', 'book.id', 'review.book_id')
            ->selectRaw('
                book.id,
                book.book_title, 
                book.book_cover_photo,
                author.author_name,
                book.book_price,
                CASE
                    WHEN discount.discount_start_date >= NOW() THEN book.book_price
                    WHEN discount.discount_end_date <= NOW() THEN book.book_price
                    WHEN discount.discount_end_date IS NULL THEN book.book_price
                    ELSE book.book_price - discount.discount_price
                END AS sub_price
            ')
            ->groupBy('book.id', 'review.book_id', 'author.id', 'discount.id')
            ->orderBy('sub_price', 'DESC');
    }
}
