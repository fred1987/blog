<?php

namespace App\Includes\Classes;

use App\Includes\Interfaces\CounterInterface;

class Counter implements CounterInterface
{

    protected $count = 0;

    public function increment()
    {
        $this->count += 1;

    }

    public function decrement()
    {
        if ($this->count > 0) $this->count -= 1;
    }

    public function getVal()
    {
        return $this->count;
    }
}