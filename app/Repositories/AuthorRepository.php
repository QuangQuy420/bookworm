<?php

namespace App\Repositories;
use App\Models\Author;
use App\Http\Resources\AuthorCollection;

class AuthorRepository {
    public function getAuthorName() {
        $query = new AuthorCollection(Author::getAuthorName()->paginate(10));
        
        return response()->json([
            'author' => $query
        ], 200);
    }
}