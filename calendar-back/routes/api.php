<?php

use App\Http\Controllers\Api\V1\AuthController;
use App\Http\Controllers\Api\V1\CalendarController;
use Illuminate\Support\Facades\Route;

Route::post('v1/auth/register', [AuthController::class, 'register']);
Route::post('v1/auth/login', [AuthController::class, 'login']);

Route::group(['middleware' => ['auth:sanctum']], function () {
    Route::post('v1/auth/logout', [AuthController::class, 'logout']);


    Route::get('v1/calendars', [CalendarController::class, 'show']);
    Route::post('v1/calendars', [CalendarController::class, 'store']);
    Route::delete('v1/calendars/{id}', [CalendarController::class, 'destroy']);
});
