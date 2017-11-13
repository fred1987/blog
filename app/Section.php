<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Section extends Model
{
    public $timestamps = false;

    protected $guarded = ['id'];

    public function posts()
    {
        return $this->belongsToMany('App\Post');
    }
}
