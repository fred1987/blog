<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class mainController extends Controller
{
    protected $coffee;
    protected $counter;

    public function __construct()
    {
        $this->coffee = resolve('App\Includes\Interfaces\CoffeeMachineInterface');
        $this->counter = resolve('App\Includes\Interfaces\CounterInterface');
    }

    public function index()
    {
        return view('index', [
            'title' => 'Мой блог'
        ]);
    }

    public function elements()
    {
        return view('pages.elements', [
            'title' => 'Элементы шаблона'
        ]);
    }

    public function about()
    {
        return view('pages.about', [
            'title' => 'О нас'
        ]);
    }

    public function contacts()
    {
        return view('pages.contacts', [
            'title' => 'Обратная связь'
        ]);
    }

    public function test(int $id)
    {
        //приготовим кофе
        $this->coffee->makeCoffee(2);
        $this->coffee->oneMore();
        $this->coffee->oneMore();
        $this->coffee->oneMore();

        return view('pages.test_' . $id, [
            'title' => 'Тест',
            'current_time' => myFormatDate(time()),
            'coffee' => $this->coffee->getCoffee(),
        ]);
    }
}
