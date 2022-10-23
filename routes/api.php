<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\BookController;
use App\Http\Controllers\Api\CategoryController;
use App\Http\Controllers\Api\AuthorController;
use App\Http\Controllers\Api\ReviewController;


/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('/get-sale-books', [BookController::class, 'getSaleBooks']);
Route::get('/get-recommend-books', [BookController::class, 'getRecommendBooks']);
Route::get('/get-popular-books', [BookController::class, 'getPopularBooks']);
Route::get('/get-all-books', [BookController::class, 'getAllBooks']);

Route::get('/get-category-name', [CategoryController::class, 'getCategoryName']);
Route::get('/get-author-name', [AuthorController::class, 'getAuthorName']);

Route::resource('/get-detail-reviews', ReviewController::class)->only(['show']);

