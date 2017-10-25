<?php

namespace App\Http\Controllers;

use App\Includes\Interfaces\CoffeeMachineInterface;
use Illuminate\Http\Request;

class ArticleController extends Controller
{
    protected $coffeeMachine;
    protected $counter;

    public function __construct(CoffeeMachineInterface $coffeeMachine)
    {
        $this->coffeeMachine = $coffeeMachine;
    }

    public function detail()
    {
        //приготовим кофе
        $this->coffeeMachine->makeCoffee(3);

        return view('pages.post', [
            'title' => 'Детальная страница поста',
            'coffee' => $this->coffeeMachine->getCoffee()
        ]);
    }
}
