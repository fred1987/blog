<?php

namespace App\Includes\Interfaces;

interface CoffeeMachineInterface
{
    public function makeCoffee(int $count);

    public function getCoffee();

    public function oneMore();

}