<?php

namespace App\Http\ViewComposers;

use App\Models\Post;
use Illuminate\View\View;


class ArticleComposer
{
    private $favoritePost = '';

    public function __construct()
    {
        $this->favoritePost = Post::where('is_favorite', true)->first();
    }

    public function compose(View $view)
    {
        $view->with('favoritePost', $this->favoritePost);
    }
}