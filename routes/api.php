<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\UserController;
use App\Http\Controllers\Api\FavoriteController;
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

Route::post('register', [UserController::class, 'register']);
Route::post('login', [UserController::class, 'login']);
Route::get('get-token', [UserController::class, 'getTokenUser']);

Route::group(['middleware' => ["auth:sanctum"]], function () {

    Route::get('user-profile', [UserController::class, 'userProfile']);
    Route::get('logout', [UserController::class, 'logout']);
   
    Route::post('get-count-favorites',[FavoriteController::class, 'getCountFavorites']);
    Route::post('get-favorites',[FavoriteController::class, 'getFavorites']);
    Route::post('register-favorites',[FavoriteController::class, 'registerFavorites']);
    Route::post('delete-favorites',[FavoriteController::class, 'deleteFavorites']);
});

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
