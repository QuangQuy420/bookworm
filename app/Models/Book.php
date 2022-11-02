<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Carbon\Carbon;

use App\Models\Discount;
use App\Models\Author;
use App\Models\Review;
use App\Models\Category;

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

    public function category() {
        return $this->belongsTo(category::class);
    }

    public function scopeGetListBooks($query) {
        return $query
            ->leftJoin('author', 'book.author_id', 'author.id')
            ->leftJoin('discount', 'book.id', 'discount.book_id')
            ->leftJoin('category', 'book.category_id', 'category.id')
            ->leftJoin('review', 'book.id', 'review.book_id')
            ->select(
                'book.id',
                'book.book_title', 
                'book.book_summary',
                'book.book_cover_photo',
                'book.author_id',
                'author.author_name',
                'book.category_id',
                'book.book_price',
                'discount.discount_price',
                'discount.discount_start_date',
                'discount.discount_end_date'
            )
            ->groupBy('book.id', 'author.id', 'discount.id');
    }

    public function scopeGetSaleBooks($query) {
        return $query
            ->where([
                ['discount.discount_start_date', '<=', Carbon::now('Asia/Ho_Chi_Minh')],
                ['discount.discount_end_date', '>=', Carbon::now('Asia/Ho_Chi_Minh')]
            ])->orWhere([
                ['discount.discount_start_date', '<=', Carbon::now('Asia/Ho_Chi_Minh')],
                ['discount.discount_end_date', NULL]
            ])
            ->orderByRaw('book.book_price - discount.discount_price DESC')
            ->orderBy('discount.discount_price', 'ASC');
    }

    public function scopeGetRecommendBooks($query) {
        return $query
            ->orderByRaw('COALESCE(AVG(review.rating_start), 0) DESC')
            ->orderByRaw('
                CASE
                    WHEN discount.discount_start_date >= NOW() THEN book.book_price
                    WHEN discount.discount_end_date <= NOW() THEN book.book_price
                    WHEN discount.discount_start_date IS NULL THEN book.book_price
                    ELSE discount.discount_price
                END
            ');
    }

    public function scopeGetPopularBooks($query) {
        return $query
            ->orderByRaw('COALESCE(COUNT(review.rating_start), 0) DESC')
            ->orderByRaw('
                CASE
                    WHEN discount.discount_start_date >= NOW() THEN book.book_price
                    WHEN discount.discount_end_date <= NOW() THEN book.book_price
                    WHEN discount.discount_start_date IS NULL THEN book.book_price
                    ELSE discount.discount_price
                END
            ');
    }

    public function scopeGetAllBooks($query, $sort) {
        return $query
            ->orderByRaw('
                CASE
                    WHEN discount.discount_start_date >= NOW() THEN book.book_price
                    WHEN discount.discount_end_date <= NOW() THEN book.book_price
                    WHEN discount.discount_start_date IS NULL THEN book.book_price
                    ELSE discount.discount_price 
                END ' .$sort
            );
    }
}
