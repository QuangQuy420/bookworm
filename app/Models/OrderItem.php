<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Order;

class OrderItem extends Model
{
    use HasFactory;

    public $timestamps = false;
    protected $table = 'order_item';

    public $fillable = [
        'order_id',
        'book_id',
        'quantity',
        'price'
    ];

    public function order() {
        return $this->belongsTo(Order::class);
    }
}
