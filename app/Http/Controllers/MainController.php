<?php

namespace App\Http\Controllers;

use App\Includes\Interfaces\CoffeeMachineInterface;
use App\Includes\Interfaces\CounterInterface;
use Illuminate\Http\Request;

class mainController extends Controller
{
    protected $coffeeMachine;
    protected $counter;

    public function __construct(CoffeeMachineInterface $coffeeMachine, CounterInterface $counter)
    {
        $this->coffeeMachine = $coffeeMachine;
        $this->counter = $counter;
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
        $this->coffeeMachine->makeCoffee(2);
        $this->coffeeMachine->oneMore();
        $this->coffeeMachine->oneMore();
        $this->coffeeMachine->oneMore();

        return view('pages.test_' . $id, [
            'title' => 'Тест',
            'current_time' => myFormatDate(time()),
            'coffee' => $this->coffeeMachine->getCoffee(),
        ]);
    }
}
