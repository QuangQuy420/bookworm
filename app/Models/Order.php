<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\User;
use App\Models\OrderItem;

class Order extends Model
{
    use HasFactory;

    public $timestamps = false;
    protected $table = 'order';

    public $fillable = [
        'user_id',
        'order_date',
        'order_amount'
    ];

    public function user() {
        return $this->belongsTo(User::class);
    }

    public function orderItems() {
        return $this->hayMany(orderItem::class);
    }
}
