<?php

namespace App\Http\ViewComposers;

use App\Profile;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Illuminate\View\View;


class ArticleComposer
{

    protected $users;

    private $userName;

    public function __construct()
    {
        $this->users = DB::table('users')->count();
        $this->userName = (Auth::check()) ? Profile::where('user_id', Auth::id())->first()->name : 'гость';
    }

    /**
     * Bind data to the view.
     *
     * @param  View $view
     * @return void
     */
    public function compose(View $view)
    {
        $view->with([
            'userCount' => $this->users,
            'user_name' => $this->userName
        ]);
    }
}