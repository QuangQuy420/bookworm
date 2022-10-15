<?php

namespace App\Repositories;
use App\Models\Book;
use App\Http\Resources\BookCollection;

class BookRepository {
    public function getSaleBooks() {
        return new BookCollection(Book::getSaleBooks()->paginate(10));
    }

    public function getRecommendBooks() {
        return new BookCollection(Book::getRecommendBooks()->paginate(8));
    }

    public function getPopularBooks() {
        return new BookCollection(Book::getPopularBooks()->paginate(8));
    }
}