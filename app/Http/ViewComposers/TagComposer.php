<?php

namespace App\Http\ViewComposers;

use App\Models\Tag;
use Illuminate\View\View;
use Illuminate\Support\Facades\Cache;

class TagComposer
{

    private $tags;

    public function __construct()
    {
        $this->tags = Cache::remember('tags', env('CACHE_TIME', 0), function () {
            return Tag::all();
        });
    }

    public function compose(View $view)
    {
        $view->with('tags', $this->tags);
    }
}