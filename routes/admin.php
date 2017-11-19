<?php

Route::group(['prefix' => '/posts'], function () {
    Route::get('/add-form', 'ArticleController@addForm')->name('admin.posts.create');
    Route::get('/delete', 'ArticleController@delete')->name('admin.posts.delete');
    Route::post('/create', 'ArticleController@create')->name('admin.posts.postCreate');
    Route::post('/update', 'ArticleController@update')->name('admin.posts.update');
});
