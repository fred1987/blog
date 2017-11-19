<?php

namespace App\Http\ViewComposers;

use App\Models\Section;
use Illuminate\View\View;


class SectionComposer
{

    private $articleSections = [];

    public function __construct()
    {
        $sections = Section::all();

        foreach ($sections as $section) {
            $this->articleSections[] = [
                'name' => $section->name,
                'slug' => $section->slug,
                'count' => $section->posts->count()
            ];

        }
    }

    public function compose(View $view)
    {
        $view->with('articleSections', $this->articleSections);
    }
}