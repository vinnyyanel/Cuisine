<?php

use App\Http\Controllers\connexionController;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UserController;
use App\Http\Controllers\PlatController;
use App\Http\Controllers\searchController;

Route::middleware(['auth:api'])->group(function () {
    Route::post('/deconnexion', [connexionController::class, 'deconnexion']);
    Route::get('/search/{slug}', [searchController::class, 'search']);
    Route::get('/users', [UserController::class, 'index']);
    Route::get('/users/{id}', [UserController::class, 'show']);
    Route::put('/users/{id}', [UserController::class, 'update']);
    Route::delete('/users/{id}', [UserController::class, 'destroy']);
    Route::get('/plats', [PlatController::class, 'index']);
    Route::post('/plats', [PlatController::class, 'store']);
    Route::get('/plats/{id}', [PlatController::class, 'show']);
    Route::put('/plats/{id}', [PlatController::class, 'update']);
    Route::delete('/plats/{id}', [PlatController::class, 'destroy']);
});

Route::post('/users', [UserController::class, 'store']);
Route::post('/connexion', [connexionController::class, 'connexion']);


