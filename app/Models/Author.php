<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

use App\Models\Book;

class Author extends Model
{
    use HasFactory;

    public $timestamps = false;
    protected $table = 'author';

    public $fillable = [
        'author_name',
        'author_bio'
    ];

    public function books() {
        return $this->hasMany(Book::class);
    }

    public function scopeGetAuthorName($query) {
        return $query
            ->select(
                'id',
                'author_name'
            );
    }
}
