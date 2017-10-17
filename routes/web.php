<?php

//main controllers
Route::get('/', 'MainController@index')->name('main');
Route::get('/elements', 'MainController@elements')->name('elements');
Route::get('/about', 'MainController@about')->name('about');
Route::get('/contacts', 'MainController@contacts')->name('contacts');
Route::get('/test/{id}', 'MainController@test')->name('test');

//article controllers
Route::get('/news/{id}', 'ArticleController@detail')->name('postDetail');
