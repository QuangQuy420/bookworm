<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

use App\Models\Book;

class Review extends Model
{
    use HasFactory;

    public $timestamps = false;
    protected $table = 'review';

    public $fillable = [
        'book_id',
        'review_title',
        'review_details',
        'review_date',
        'review_start'
    ];

    public function book() {
        return $this->belongsTo(Book::class);
    }

    public function scopeGetDetailReviews($query, $id) {
        return $query
            ->where('review.book_id', $id)
            ->selectRaw('
                COALESCE(AVG(review.rating_start), 0) AS avg_rating,
                COALESCE(COUNT(review.rating_start), 0) AS total_rating
            ')
            ->groupBy('review.book_id');
    }

    public function scopeGetTotalRating($query, $id, $star) {
        return $query
            ->where('review.book_id', $id)
            ->selectRaw('COUNT(review.rating_start) AS star_' .$star)
            ->groupBy('review.rating_start')
            ->havingRaw('review.rating_start = ?', [$star]);
    }

    public function scopeSortDate($query, $sort) {
        return $query   
            ->orderBy('review.review_date', $sort ? $sort : 'DESC');
    }
}
