<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UserController;
use App\Http\Controllers\PlatController;

Route::get('/users', [UserController::class, 'index']);
Route::post('/users', [UserController::class, 'store']);
Route::get('/users/{id}', [UserController::class, 'show']);
Route::put('/users/{id}', [UserController::class, 'update']);
Route::delete('/users/{id}', [UserController::class, 'destroy']);

Route::get('/plats', [PlatController::class, 'index']);
Route::post('/plats', [PlatController::class, 'store']);
Route::get('/plats/{id}', [PlatController::class, 'show']);
Route::put('/plats/{id}', [PlatController::class, 'update']);
Route::delete('/plats/{id}', [PlatController::class, 'destroy']);
