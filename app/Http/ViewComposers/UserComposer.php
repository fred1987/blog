<?php

namespace App\Http\ViewComposers;

use Illuminate\Support\Facades\Auth;
use Illuminate\View\View;


class UserComposer
{

    private $userName;

    public function __construct()
    {
        $this->userName = (Auth::check()) ? Auth::user()->profile->name : 'гость';
    }

    public function compose(View $view)
    {
        $view->with([
            'user_name' => $this->userName
        ]);
    }
}