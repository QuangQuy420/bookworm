<?php

namespace App\Repositories;
use App\Models\Book;
use App\Http\Resources\BookCollection;

class BookRepository {
    public function getSaleBooks($request) {
        $query = Book::query();
        if($limit = $request->input('limit')){}
        if($author = $request->input('author')) {
            $query->where('author_name', $author);
        }
        if($category = $request->input('category')) {
            $query->where('category_name', $category);
        }
        if($star = $request->input('star')) {
            $query->havingRaw('COALESCE(AVG(review.rating_start), 0) >= ?', [$star]);
        }
        return new BookCollection($query->getSaleBooks()->paginate($limit));
    }
    
    public function getRecommendBooks() {
        return new BookCollection(Book::getRecommendBooks()->paginate(8));
    }

    public function getPopularBooks($request) {
        $query = Book::query();
        if($limit = $request->input('limit')){}
        if($author = $request->input('author')) {
            $query->where('author_name', $author);
        }
        if($category = $request->input('category')) {
            $query->where('category_name', $category);
        }
        if($star = $request->input('star')) {
            $query->havingRaw('COALESCE(AVG(review.rating_start), 0) >= ?', [$star]);
        }
        return new BookCollection($query->getPopularBooks()->paginate($limit ? $limit : 8));
    }

    public function getAllBooks($request) {
        $query = Book::query();
        if($limit = $request->input('limit')){}
        if($sort = $request->input('sort')) {
            $query->orderBy('discount_price', $sort);
            $query->orderBy('book_price', $sort);
        }
        if($author = $request->input('author')) {
            $query->where('author_name', $author);
        }
        if($category = $request->input('category')) {
            $query->where('category_name', $category);
        }
        if($star = $request->input('star')) {
            $query->havingRaw('COALESCE(AVG(review.rating_start), 0) >= ?', [$star]);
        }
        return new BookCollection($query->getAllBooks()->paginate($limit));
    }
}