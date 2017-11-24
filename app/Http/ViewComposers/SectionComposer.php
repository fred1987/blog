<?php

namespace App\Http\ViewComposers;

use App\Models\Section;
use Illuminate\Support\Facades\Cache;
use Illuminate\View\View;


class SectionComposer
{

    private $sections = [];

    public function __construct()
    {
        $this->sections = Cache::remember('sections', env('CACHE_TIME', 0), function () {
            return Section::withCount('posts')->get();
        });
    }

    public function compose(View $view)
    {
        $view->with('articleSections', $this->sections);
    }
}