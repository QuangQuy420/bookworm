<?php

namespace App\Repositories;
use App\Models\Order;
use App\Models\OrderItem;
use App\Models\Book;
use App\Http\Resources\ReviewCollection;
use App\Http\Resources\BookResource;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\DB;
use Carbon\Carbon;

class OrderRepository {
    public function order($request) {
        DB::beginTransaction();
        try {
            $order_id = DB::table('order')->max('id');
            $order_amount = 0;
            if ($order_id == null) {
                $order_id = 0;
            } else {
                $order_id = $order_id + 1;
            };

            $messages = [
                'book_id.required' => 'Required',
                'book_id.exists' => 'No Exist Book',
                'quantity.required' => 'Required',
                'price.required'=> 'Required'
            ];

            foreach($request->listOrder as $item) { 
                // Validator function has 3 params
                $validate = Validator::make($item, [
                    'book_id' => 'required|exists:book,id',
                    'quantity' => 'required',
                    'price' => 'required'
                ], $messages);
               
                if ($validate->fails()) {
                    return response()->json(
                        [
                            'message' => $validate->errors()
                        ],
                        422
                    ); 
                }

                $order_amount += ($item['quantity'] * $item['price']);
            }

            Order::Create([
                'user_id'=> $request->user()->id,
                'order_date'=> Carbon::now('Asia/Ho_Chi_Minh')->toDateString(),
                'order_amount'=> $order_amount
            ]);

            foreach($request->listOrder as $item) {
                OrderItem::Create([
                    'order_id'=> $order_id,
                    'book_id' => $item['book_id'],
                    'quantity' => $item['quantity'],
                    'price' => $item['price']
                ]);
            }

            DB::commit();
            return response()->json(
                [
                    'message'=>'Place Order Success !'
                ],
                200
            );
        } catch (\Exception $e) {
            //throw $th;
            DB::rollBack();
            return response()->json(
                [
                    'message'=>'Error Order !'
                ],
                422
            );
        }
        }
    }