<?php

use App\Http\Controllers\connexionController;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UserController;
use App\Http\Controllers\PlatController;
use App\Http\Controllers\searchController;

Route::middleware(['auth:api'])->group(function () {
    Route::post('/deconnexion', [connexionController::class, 'deconnexion']);
    Route::get('/users', [UserController::class, 'index']);
    Route::post('/users', [UserController::class, 'store']);
    Route::delete('/users/{id}', [UserController::class, 'destroy']);
    Route::put('/users/{id}', [UserController::class, 'update']);
    Route::post('/plats', [PlatController::class, 'store']);
    Route::put('/plats/{id}', [PlatController::class, 'update']);
    Route::delete('/plats/{id}', [PlatController::class, 'destroy']);
});

Route::get('/search/{slug}', [searchController::class, 'search']);
Route::get('/plats/{id}', [PlatController::class, 'show']);
Route::get('/users/{id}', [UserController::class, 'show']);
Route::get('/plats', [PlatController::class, 'index']);
Route::post('/connexion', [connexionController::class, 'connexion']);


