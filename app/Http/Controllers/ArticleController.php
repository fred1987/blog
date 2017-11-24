<?php

namespace App\Http\Controllers;

use App\Includes\Interfaces\CoffeeMachineInterface;
use App\Models\Post;

class ArticleController extends Controller
{
    protected $coffeeMachine;
    protected $counter;

    public function __construct(CoffeeMachineInterface $coffeeMachine)
    {
        $this->coffeeMachine = $coffeeMachine;
    }

    public function detail(Post $post)
    {

        //как сделать кеширование или применить with, если используется внедрение модели????

        return view('pages.post', [
            'title' => $post->headline,
            'post' => $post,
            'tags' => $post->tags
        ]);
    }
}
