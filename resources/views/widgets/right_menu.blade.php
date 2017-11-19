@section('right_menu')
    <div class="widget-categories  push-down-30">
        <h6>РАЗДЕЛЫ</h6>
        <ul>
            @foreach($articleSections as $elem)
                <li>
                    <a href="/?section={{ $elem['slug'] }}">{{ $elem['name'] }} <span
                                class="widget-categories__text">{{ $elem['count'] }}</span></a>
                </li>
            @endforeach
        </ul>
    </div>
@show