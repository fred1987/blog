<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class ArticleController extends Controller
{
    protected $coffee;
    protected $counter;

    public function __construct()
    {
        $this->coffee = resolve('App\Includes\Interfaces\CoffeeMachineInterface');
        $this->counter = resolve('App\Includes\Interfaces\CounterInterface');
    }

    public function detail()
    {
        //приготовим кофе
        $this->coffee->makeCoffee(3);
        $this->counter->increment();

        return view('pages.post', [
            'title' => 'Детальная страница поста',
            'coffee' => $this->coffee->getCoffee(),
            'counter' => $this->counter->getVal()
        ]);
    }
}
