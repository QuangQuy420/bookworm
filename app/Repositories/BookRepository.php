<?php

namespace App\Repositories;
use App\Models\Book;
use App\Http\Resources\BookCollection;

class BookRepository {
    public function getSaleBooks($request) {
        $query = Book::query();
        if($limit = $request->input('limit')){}
        return new BookCollection($query->getSaleBooks()->paginate($limit));
    }

    public function getRecommendBooks() {
        return new BookCollection(Book::getRecommendBooks()->paginate(8));
    }

    public function getPopularBooks($request) {
        $query = Book::query();
        if($limit = $request->input('limit')){}
        return new BookCollection(Book::getPopularBooks()->paginate($limit ? $limit : 8));
    }

    public function getAllBooks($request) {
        $query = Book::query();
        if($limit = $request->input('limit')){}
        if($sort = $request->input('sort')) {
            $query->orderBy('discount_price', $sort);
            $query->orderBy('book_price', $sort);
        }
        return new BookCollection($query->getAllBooks()->paginate($limit));
    }
}