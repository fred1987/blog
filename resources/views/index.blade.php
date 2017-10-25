@extends('layouts.two_column')

@section('main_column')
    <div class="boxed  push-down-45">
        <div class="meta">
            <img class="wp-post-image"
                 src="{{ asset('images/dummy-licensed/blog-image.jpg') }}"
                 alt="Blog image"
                 width="748"
                 height="324">
            <div class="row">
                <div class="col-xs-12  col-sm-10  col-sm-offset-1">
                    <div class="meta__container--without-image">
                        <div class="row">
                            <div class="col-xs-12  col-sm-8">
                                <div class="meta__info">
                                    <a href="#">Статьи</a>
                                </div>
                            </div>
                            <div class="col-xs-12 col-sm-4">
                                <div class="meta__comments">
                                                <span class="meta__date"><span
                                                            class="glyphicon glyphicon-calendar"></span> &nbsp; 10 мая 2015 г.</span>
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
                        <a href="/news/5">Основной заголовок поста c картинкой</a>
                    </h2>
                    <h3>Подзаголовок поста</h3>
                    <p>
                        Высшая арифметика, исключая очевидный случай, позитивно соответствует стремящийся
                        ротор
                        векторного поля, как и предполагалось. Длина вектора вырождена. Постоянная величина
                        транслирует коллинеарный детерминант. Теорема, очевидно, развивает комплексный
                        полином.
                        Матожидание, в первом приближении, традиционно проецирует аксиоматичный график
                        функции.
                    </p>
                </div>
                <a href="post.html">
                    <div class="read-more">
                        Читать далее <span class="glyphicon glyphicon-chevron-right"></span>
                        <div class="comment-icon-counter">
                            <span class="glyphicon glyphicon-comment comment-icon"></span>
                            <span class="comment-counter">10</span>
                        </div>
                    </div>
                </a>
            </div>
        </div>
    </div>
@endsection