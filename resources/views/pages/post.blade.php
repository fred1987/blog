@extends('layouts.one_column')

@section('main_column')
    <div class="boxed push-down-60">
        <div class="meta">
            @if($post->preview_img)
                <img class="wp-post-image" src="{{ $post->preview_img }}" alt="Blog image"
                     width="1138"
                     height="493">
            @endif
            <div class="row">
                <div class="col-xs-12 col-sm-10 col-sm-offset-1 col-md-8 col-md-offset-2">
                    <div class="meta__container--without-image">
                        <div class="row">
                            <div class="col-xs-12  col-sm-8">
                                <div class="meta__info">
                                    <span class="meta__date">
                                        <span class="glyphicon glyphicon-calendar"></span>
                                        {{ getRusDate($post->created_at) }}
                                    </span>
                                </div>
                            </div>
                            <div class="col-xs-12  col-sm-4">
                                <p>Связано с разделами:
                                    @foreach($post->sections as $section)
                                        <a href="/?section={{ $section->slug }}">{{ $section->name }}</a>
                                    @endforeach
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-xs-10 col-xs-offset-1 col-md-8 col-md-offset-2 push-down-60">
                <div class="post-content">
                    <h1>{{ $post->headline }}</h1>
                    {{ $post->detail_text }}
                </div>
                @include('sections.post_tags')
                @include('sections.comments')
            </div>
        </div>
    </div>

@endsection