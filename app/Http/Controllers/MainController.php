<?php

namespace App\Http\Controllers;

use App\Includes\Interfaces\CoffeeMachineInterface;
use App\Includes\Interfaces\CounterInterface;
use App\Models\Post;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class mainController extends Controller
{
    protected $coffeeMachine;
    protected $counter;

    public function __construct(CoffeeMachineInterface $coffeeMachine, CounterInterface $counter)
    {
        $this->coffeeMachine = $coffeeMachine;
        $this->counter = $counter;
    }

    public function index(Request $request)
    {
        //тут конечно стоит придумать чтто-то более нормальное
        if ($request->isMethod('post')) abort(403);
        if ($request->tag) {
            $posts = Post::where('is_active', true)->whereHas('tags', function ($q) {
                $q->where('slug', request('tag'));
            })->latest()->get();
        } elseif ($request->section) {
            $posts = Post::where('is_active', true)->whereHas('sections', function ($q) {
                $q->where('slug', request('section'));
            })->latest()->get();
        } else {
            $posts = Post::where('is_active', true)->latest()->get();
        }

        return view('index', [
            'title' => 'Мой блог',
            'posts' => $posts,
            'is_admin' => (Auth::check()) ? Auth::user()->is_admin : false
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
}
