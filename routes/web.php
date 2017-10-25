<?php

//main controllers
Route::get('/', 'MainController@index')->name('main');
Route::get('/elements', 'MainController@elements')->name('elements');
Route::get('/about', 'MainController@about')->name('about');
Route::get('/contacts', 'MainController@contacts')->name('contacts');
Route::get('/test/{id}', 'MainController@test')->name('test');

//article controllers
Route::get('/news/{id}', 'ArticleController@detail')->name('postDetail');


//auth controllers
Route::get('/registration', 'AuthController@register')->name('register');
Route::post('/reg', 'AuthController@registerPost')->name('regPost');
Route::get('/login', 'AuthController@login')->name('login');
Route::post('/loginPost', 'AuthController@loginPost')->name('loginPost');
Route::post('/logout', 'AuthController@logout')->name('logout');



//Auth::routes();
//Route::get('/home', 'HomeController@index')->name('home');
