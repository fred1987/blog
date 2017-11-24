<?php

namespace App\Http\ViewComposers;

use App\Models\Post;
use Illuminate\View\View;
use Illuminate\Support\Facades\Cache;


class ArticleComposer
{
    private $favoritePost = '';

    public function __construct()
    {
        $this->favoritePost = Cache::remember('is_favorite', env('CACHE_TIME', 0), function () {
            return Post::where('is_favorite', true)->first();
        });
    }

    public function compose(View $view)
    {
        $view->with('favoritePost', $this->favoritePost);
    }
}