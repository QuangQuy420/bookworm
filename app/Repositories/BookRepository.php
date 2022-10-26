<?php

namespace App\Repositories;
use App\Models\Book;
use App\Http\Resources\BookCollection;
use App\Http\Resources\ReviewCollection;
use App\Http\Resources\BookResource;

class BookRepository {
    protected $limit;
    protected $sort;
    
    public function filterBook($request) {
        $query = Book::getListBooks();
        if($this->limit = $request->input('limit')){}
        if($this->sort = $request->input('sort')) {}
        if($author = $request->input('author')) {
            $query->where('book.author_id', $author);
        }
        if($category = $request->input('category')) {
            $query->where('book.category_id', $category);
        }
        if($star = $request->input('star')) {
            $query->havingRaw('COALESCE(AVG(review.rating_start), 0) >= ?', [$star]);
        }
        return $query;
    }

    public function getSaleBooks($request) {
        $result = $this->filterBook($request);
        $result = new BookCollection($result->getSaleBooks()->paginate($this->limit));

        return response()->json([
            'ListBook' => $result
        ], 200);
    }

    public function getRecommendBooks() {
        $result = new BookCollection(Book::getListBooks()->getRecommendBooks()->paginate(8));

        return response()->json([
            'ListBook' => $result
        ], 200);
    }

    public function getPopularBooks($request) {
        $result = $this->filterBook($request);
        $result = new BookCollection($result->getPopularBooks()->paginate($this->limit ? $this->limit : 8));

        return response()->json([
            'ListBook' => $result
        ], 200);
    }

    public function getAllBooks($request) {
        $result = $this->filterBook($request);
        $result = new BookCollection($result->getAllBooks($this->sort)->paginate($this->limit));

        return response()->json([
            'ListBook' => $result
        ], 200);
    }
}