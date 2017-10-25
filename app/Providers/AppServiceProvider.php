<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;
use Illuminate\Support\Facades\View;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot()
    {
        //for widget and footer data
        View::share([
            'myName' => 'Альфред Иванов',
            'myFullName' => 'Иванов Альфред Николаевич',
            'email' => 'hi@ifred.ru',
            'skype' => 'fredtower87',
            'vk' => 'https://vk.com/alfred_ivanov'
        ]);

        // composer test
        View::composer('*', 'App\Http\ViewComposers\ArticleComposer');
    }

    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {
        // кофе для постов блога
        $this->app->when('App\Http\Controllers\ArticleController')
            ->needs('App\Includes\Interfaces\CoffeeMachineInterface')
            ->give('App\Includes\Classes\RobustaCoffeeMachine');

        // кофе для остальных страниц
        $this->app->bind(
            'App\Includes\Interfaces\CoffeeMachineInterface',
            'App\Includes\Classes\ArabicCoffeeMachine'
        );

        //сингтон счетчик
        $this->app->singleton(
            'App\Includes\Interfaces\CounterInterface',
            'App\Includes\Classes\Counter'
        );
    }
}