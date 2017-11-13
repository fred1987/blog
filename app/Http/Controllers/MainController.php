<?php

namespace App\Http\Controllers;

use App\Includes\Interfaces\CoffeeMachineInterface;
use App\Includes\Interfaces\CounterInterface;
use App\Post;
use App\Profile;
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
            'title' => 'Мой блог',
            'posts' => Post::all(),
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
}
