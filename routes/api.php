<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\BookController;
use App\Http\Controllers\Api\CategoryController;
use App\Http\Controllers\Api\AuthorController;
use App\Http\Controllers\Api\AuthController;
use App\Http\Controllers\Api\ReviewController;
use App\Http\Controllers\Api\OrderController;


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

Route::middleware('auth:sanctum')->group(function () {
    route::get('/logout', [AuthController::class, 'logout']);
    route::resource('/order', OrderController::class)->only(['store']);
}); 

Route::post('/login', [AuthController::class, 'login']);

Route::prefix('books')->group(function () {
    Route::get('/', [BookController::class, 'getAllBooks']);
    Route::get('/on-sale', [BookController::class, 'getSaleBooks']);
    Route::get('/recommend', [BookController::class, 'getRecommendBooks']);
    Route::get('/popular', [BookController::class, 'getPopularBooks']);
});

Route::prefix('names')->group(function () {
    Route::resource('/category', CategoryController::class)->only(['index']);
    Route::resource('/author', AuthorController::class)->only(['index']);
});

Route::resource('/review', ReviewController::class)->except([
    'index', 'create', 'edit', 'update', 'destroy'
]);

