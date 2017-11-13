@extends('layouts.two_column')

@section('main_column')
    @foreach($posts as $post)
        @continue(!$post->is_active)
        <div class="boxed  push-down-45">
            <div class="meta">
                @if($post->preview_img)
                    <img class="wp-post-image"
                         src="{{ $post->preview_img }}"
                         alt="Blog image"
                         width="748"
                         height="324">
                @endif
                <div class="row">
                    <div class="col-xs-12  col-sm-10  col-sm-offset-1">
                        <div class="meta__container--without-image">
                            <div class="row">
                                <div class="col-xs-12  col-sm-8">
                                    <div class="meta__info">
                                        <span>{{ $post->user->profile->name }}</span>
                                    </div>
                                </div>
                                <div class="col-xs-12 col-sm-4">
                                    <div class="meta__comments">
                                        <span class="meta__date">
                                            <span class="glyphicon glyphicon-calendar"></span>
                                            {{ $post->created_at }}
                                            </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-xs-10  col-xs-offset-1">
                    <div class="post-content--front-page">
                        <h2 class="front-page-title">
                            <a href="/news/{{ $post->id }}">{{ $post->headline }}</a>
                        </h2>
                        <p>{{ $post->preview_text }}</p>
                    </div>
                    <a href="/news/{{ $post->id }}">
                        <div class="read-more">
                            Читать далее <span class="glyphicon glyphicon-chevron-right"></span>
                            <div class="comment-icon-counter">
                                <span class="glyphicon glyphicon-comment comment-icon"></span>
                                <span class="comment-counter">{{ $post->comments->count() }}</span>
                            </div>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    @endforeach
@endsection