<?php

namespace App\Repositories;
use App\Models\Review;
use App\Models\Book;
use App\Http\Resources\ReviewCollection;
use App\Http\Resources\BookResource;

class ReviewRepository {
    protected $total = array();
    protected $limit;
    protected $sort;

    public function filterReview($id, $request) {
        $query = Book::findOrFail($id)->reviews();
        if($this->limit = $request->input('limit')){}
        if($this->sort = $request->input('sort')) {}
        if($star = $request->input('star')) {
            return $query->where('review.rating_start', $star);
        }
        return $query;
    }

    public function getDetailReview($id, $request) {
        $book = new BookResource(Book::getListBooks()->findOrFail($id));

        $reviews = $this->filterReview($id, $request);
        $reviews = new ReviewCollection($reviews->sortDate($this->sort)->paginate($this->limit ? $this->limit : 4));
        
        $rating = Review::getDetailReviews($id)->get();

        for ($star = 1; $star <= 5; $star++) {
            $this->total[$star] = Review::getTotalRating($id, $star)->get();
        }

        return response()->json([
            'book' => $book,
            'reviews' => $reviews,
            'rating' => $rating,
            'total' => $this->total
        ], 200);
    }
}