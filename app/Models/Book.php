<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

use App\Models\Discount;
use App\Models\Author;

class Book extends Model
{
    use HasFactory;

    public $timestamps = false;
    protected $table = 'book';

    public $fillable = [
        'category_id',
        'author_id',
        'book_title',
        'book_summary',
        'book_price',
        'book_cover_photo'
    ];

    public function author() {
        return $this->belongsTo(Author::class);
    }

    public function discount() {
        return $this->hasOne(Discount::class);
    }

    public function scopeGetSaleBooks($query) {
        return $query
            ->select(
                'id',
                'book_title'
            );
    }
}
