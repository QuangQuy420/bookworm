<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class BookResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */
    public function toArray($request)
    {
        $final_price = $this->book_price;
        if ($this->discount_start_date != null) {
        if (($this->discount_start_date <= date('Y-m-d') && date('Y-m-d') <= $this->discount_end_date) or 
            ($this->discount_start_date <= date('Y-m-d') && $this->discount_end_date == null)) 
            {
                $final_price = $this->discount_price;
            }
        }

        return [
            'id' => $this->id,
            'book_title' => $this->book_title,
            'book_summary' => $this->book_summary,
            'book_cover_photo' => $this->book_cover_photo,
            'author_id' => $this->author_id,
            'author_name' => $this->author_name,
            'category_id' => $this->category_id,
            'category_name' => $this->category_name,
            'book_price' => $this->book_price,
            'discount_price' => $this->discount_price,
            'discount_start_date' => $this->discount_start_date,
            'discount_end_date' => $this->discount_end_date,
            'final_price' => $final_price
        ];
    }
}
