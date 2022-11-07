<?php

namespace App\Repositories;
use App\Models\Category;
use App\Http\Resources\CategoryCollection;

class CategoryRepository {
    public function getCategoryName() {
        $query = new CategoryCollection(Category::getCategoryName()->get());
        
        return response()->json([
            'category' => $query
        ], 200);
    }
}