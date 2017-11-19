<?php

namespace App\Http\ViewComposers;

use App\Models\Tag;
use Illuminate\View\View;


class TagComposer
{

    private $tags = [];

    public function __construct()
    {
        $tags = Tag::all();

        foreach ($tags as $tag) {
            $this->tags[] = [
                'name' => $tag->name,
                'slug' => $tag->slug
            ];

        }
    }

    public function compose(View $view)
    {
        $view->with('tags', $this->tags);
    }
}