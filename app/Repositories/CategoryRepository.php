<?php

namespace App\Repositories;
use App\Models\Category;

class CategoryRepository {
    public function getCategoryName() {
        return Category::getCategoryName()->get();
    }
}