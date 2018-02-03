<?php

use Illuminate\Http\Request;

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
// Include CORS -> to allow access headers
Route::group(['middleware' => 'cors'], function () {
    Route::get('title', function (){
        return response()->json([
            'data' => [
                'title' => 'Page Title',
                'message' => 'Example to show how to use service'
            ]
        ]);
    });
});

