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

    public function getPopularBooks() {
        return new BookCollection(Book::getPopularBooks()->paginate(8));
    }

    public function getAllBooks() {
        return new BookCollection(Book::getAllBooks()->paginate(12));
    }
}