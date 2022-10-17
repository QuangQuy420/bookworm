<?php

namespace App\Repositories;
use App\Models\Author;

class AuthorRepository {
    public function getAuthorName() {
        return Author::getAuthorName()->get();
    }
}