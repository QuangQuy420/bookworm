<?php

namespace App\Repositories;
use App\Models\Review;
use App\Models\Book;
use App\Http\Resources\ReviewCollection;
use App\Http\Resources\BookResource;

class ReviewRepository {
    protected $total = array();

    public function getDetailReview($id) {
        $book = new BookResource(Book::findOrFail($id));
        $reviews = new ReviewCollection(Book::findOrFail($id)->reviews()->paginate(10));
        $paginate = Review::getDetailReviews($id)->get();

        for ($star = 1; $star <= 5; $star++) {
            $this->total[$star] = Review::getTotalRating($id, $star)->get();
        }

        return response()->json([
            'book' => $book,
            'reviews' => $reviews,
            'paginate' => $paginate,
            'total' => $this->total
        ], 200);
    }
}