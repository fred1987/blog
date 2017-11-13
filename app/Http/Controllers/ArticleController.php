<?php

namespace App\Http\Controllers;

use App\Includes\Interfaces\CoffeeMachineInterface;
use App\Post;
use App\Tag;
use Illuminate\Http\Request;

class ArticleController extends Controller
{
    protected $coffeeMachine;
    protected $counter;

    public function __construct(CoffeeMachineInterface $coffeeMachine)
    {
        $this->coffeeMachine = $coffeeMachine;
    }

    public function detail(int $id)
    {
        //приготовим кофе
        $this->coffeeMachine->makeCoffee(3);

        //текущий пост
        $post = Post::where('id', $id)->first();

        return view('pages.post', [
            'title' => 'Детальная страница поста',
            'post' => $post,
            'comments' => $post->comments,
            'tags' => $post->tags,
            'coffee' => $this->coffeeMachine->getCoffee()
        ]);
    }
}
