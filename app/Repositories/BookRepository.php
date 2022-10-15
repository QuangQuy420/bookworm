<?php

namespace App\Repositories;
use App\Models\Book;
use App\Http\Resources\BookCollection;

class BookRepository {
    public function getSaleBooks() {
        return new BookCollection(Book::getSaleBooks()->paginate(5));
    }
}