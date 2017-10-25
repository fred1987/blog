<?php

namespace App\Http\ViewComposers;

use Illuminate\View\View;

class ArticleComposer
{

    protected $users;

    public function __construct()
    {
        $this->users = 7;
    }

    /**
     * Bind data to the view.
     *
     * @param  View $view
     * @return void
     */
    public function compose(View $view)
    {
        $view->with('userCount', $this->users);
    }
}