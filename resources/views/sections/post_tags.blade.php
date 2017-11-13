<div class="row">
    <div class="col-xs-12 col-sm-12">
        <div class="tags">
            <h6>Тэги</h6>
            <hr>
            @foreach($tags as $tag)
                <a href="#" class="tags__link">{{ $tag->name }}</a>
            @endforeach
        </div>
    </div>
</div>