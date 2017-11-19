@section('tags')
    <div class="tags  widget-tags">
        <h6>Тэги</h6>
        <hr>
        @foreach($tags as $tag)
            <a href="/?tag={{ $tag['slug'] }}" class="tags__link">{{ $tag['name'] }}</a>
        @endforeach
    </div>
@show