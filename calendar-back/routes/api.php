<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

use App\Http\Controllers\AuthController;
use App\Http\Controllers\CalendarController;


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

Route::post('v1/auth/login', [AuthController::class, 'login']);
Route::post('v1/auth/register', [AuthController::class, 'register']);

Route::group(['middleware' => ['auth:sanctum']], function () {
    Route::get('v1/calendars', [CalendarController::class, 'show']);
    Route::post('v1/calendars', [CalendarController::class, 'store']);
    Route::post('v1/logout', [AuthController::class, 'logout']);
});
