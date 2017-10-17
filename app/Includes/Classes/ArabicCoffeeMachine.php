<?php

namespace App\Includes\Classes;

use App\Includes\Interfaces\CoffeeMachineInterface;

class ArabicCoffeeMachine implements CoffeeMachineInterface
{
    protected $coffee = null;
    protected $count = 1;

    public function makeCoffee(int $count)
    {
        if (null === $this->coffee) {
            $this->coffee = 'done';
            $this->count = $count;
            return;
        }
    }

    public function getCoffee()
    {
        if ($this->coffee === 'done') {
            return 'Ваш кофе Арабика, сэр. Чашек - ' . $this->count;
        } else {
            return 'Кофе еще не приготовлено. Пожадуйста, приготовьте кофе.';
        }
    }

    public function oneMore()
    {
        $this->count += 1;
    }
}