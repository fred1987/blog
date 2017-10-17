@extends('layouts.one_column')

@section('main_column')
    <div class="boxed  push-down-60">
        <div class="meta">
            <img class="wp-post-image" src="{{ asset('images/dummy-licensed/blog-image.jpg') }}" alt="Blog image"
                 width="1138"
                 height="493">
            <div class="row">
                <div class="col-xs-12  col-sm-10  col-sm-offset-1  col-md-8  col-md-offset-2">
                    <div class="meta__container--without-image">
                        <div class="row">
                            <div class="col-xs-12  col-sm-8">
                                <div class="meta__info">
                                    <span class="meta__date"><span class="glyphicon glyphicon-calendar"></span> &nbsp; 10 мая 2015</span>
                                </div>
                            </div>
                            <div class="col-xs-12  col-sm-4">
                                <div class="comment-icon-counter-detail">
                                    <span class="glyphicon glyphicon-comment comment-icon"></span>
                                    <span class="comment-counter">10</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-xs-10  col-xs-offset-1  col-md-8  col-md-offset-2  push-down-60">
                <div class="post-content">
                    <h1>
                        <a href="#">Основной заголовок (H1)</a>
                    </h1>
                    <h3>{{ $coffee }}</h3>
                    <h3>Cчетчик - {{ $counter }}</h3>
                    <p>
                        Драм-машина, в первом приближении, имитирует тетрахорд. Пуантилизм, зародившийся в музыкальных
                        микроформах начала ХХ столетия, нашел далекую историческую параллель в лице средневекового
                        гокета, однако форма монотонно иллюстрирует гипнотический рифф. Явление культурологического
                        порядка, в первом приближении, полифигурно продолжает паузный доминантсептаккорд. Процессуальное
                        изменение заканчивает паузный контрапункт контрастных фактур. Как мы уже знаем, процессуальное
                        изменение дает автономный гармонический интервал. Звукосниматель просветляет хорус.
                    </p>
                    <h2>Заголовок размером H2</h2>
                    <p>
                        Драм-машина, в первом приближении, имитирует тетрахорд. Пуантилизм, зародившийся в музыкальных
                        микроформах начала ХХ столетия, нашел далекую историческую параллель в лице средневекового
                        гокета, однако форма монотонно иллюстрирует гипнотический рифф. Явление культурологического
                        порядка, в первом приближении, полифигурно продолжает паузный доминантсептаккорд.
                    </p>
                    <blockquote>
                        “Хочешь быть успешным PHP разработчиком - будь им” - Дмитрий Юрьев
                    </blockquote>
                    <p>
                        Драм-машина, в первом приближении, имитирует тетрахорд. Пуантилизм, зародившийся в музыкальных
                        микроформах начала ХХ столетия, нашел далекую историческую параллель в лице средневекового
                        гокета, однако форма монотонно иллюстрирует гипнотический рифф. Явление культурологического
                        порядка, в первом приближении, полифигурно продолжает паузный доминантсептаккорд.
                    </p>
                    <blockquote class="blockquote__alternative">
                        Хочешь быть успешным PHP разработчиком - будь им
                        <p>
                            <br>- Дмитрий Юрьев</p>
                    </blockquote>
                    <h4>Заголовок размером H4</h4>
                    <p>
                        Драм-машина, в первом приближении, имитирует тетрахорд. Пуантилизм, зародившийся в музыкальных
                        микроформах начала ХХ столетия, нашел далекую историческую параллель в лице средневекового
                        гокета, однако форма монотонно иллюстрирует гипнотический рифф. Явление культурологического
                        порядка, в первом приближении, полифигурно продолжает паузный доминантсептаккорд.
                    </p>
                </div>
                <div class="row">
                    <div class="col-xs-12  col-sm-6">

                        <div class="post-comments">
                            <a class="btn  btn-primary" href="single-post-without-image.html">Комментарии (3)</a>
                        </div>
                    </div>
                    <div class="col-xs-12  col-sm-6">
                        <div class="social-icons">
                            <a href="#" class="social-icons__container"> <span class="zocial-facebook"></span> </a>
                            <a href="#" class="social-icons__container"> <span class="zocial-twitter"></span> </a>
                            <a href="#" class="social-icons__container"> <span class="zocial-email"></span> </a>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-xs-12 col-sm-12">
                        <div class="tags">
                            <h6>Тэги</h6>
                            <hr>
                            <a href="#" class="tags__link">Разработка</a>
                            <a href="#" class="tags__link">Web</a>
                            <a href="#" class="tags__link">UI/UX</a>
                            <a href="#" class="tags__link">Жизнь</a>
                            <a href="#" class="tags__link">Обо всем</a>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-xs-12 col-sm-12">
                        <div class="comments">
                            <h6>Комментарии</h6>
                            <hr>
                            <div class="comment clearfix">
                                <div class="comment-avatar pull-left">
                                    <img src="{{ asset('images/dummy/about-5.jpg') }}" alt="User Avatar"
                                         class="img-circle comment-avatar-image">
                                </div>
                                <div class="comment-body clearfix">
                                    <div class="comment-header">
                                        <strong class="primary-font">Иванов Иван</strong>
                                        <small class="pull-right text-muted">
                                            <span class="glyphicon glyphicon-time"></span>&nbsp;&nbsp;15 мая 2015 10:12
                                        </small>
                                    </div>
                                    <p class="comment-text">
                                        Культурная аура произведения, как бы это ни казалось парадоксальным,
                                        многопланово заканчивает определенный синтез искусств. Богатство мировой
                                        литературы от Платона до Ортеги-и-Гассета свидетельствует о том, что типическое
                                        имитирует романтизм. Лабораторность художественной культуры, по определению,
                                        готично использует персональный символический метафоризм.
                                    </p>
                                </div>
                            </div>
                            <div class="comment clearfix">
                                <div class="comment-avatar pull-left">
                                    <img src="{{ asset('images/dummy/about-5.jpg') }}" alt="User Avatar"
                                         class="img-circle comment-avatar-image">
                                </div>
                                <div class="comment-body clearfix">
                                    <div class="comment-header">
                                        <strong class="primary-font">Иванов Иван</strong>
                                        <small class="pull-right text-muted">
                                            <span class="glyphicon glyphicon-time"></span>&nbsp;&nbsp;15 мая 2015 10:12
                                        </small>
                                    </div>
                                    <p class="comment-text">
                                        Культурная аура произведения, как бы это ни казалось парадоксальным,
                                        многопланово заканчивает определенный синтез искусств. Богатство мировой
                                        литературы от Платона до Ортеги-и-Гассета свидетельствует о том, что типическое
                                        имитирует романтизм. Лабораторность художественной культуры, по определению,
                                        готично использует персональный символический метафоризм.
                                    </p>
                                </div>
                            </div>
                            <div class="comment clearfix">
                                <div class="comment-avatar pull-left">
                                    <img src="{{ asset('images/dummy/about-5.jpg') }}" alt="User Avatar"
                                         class="img-circle comment-avatar-image">
                                </div>
                                <div class="comment-body clearfix">
                                    <div class="comment-header">
                                        <strong class="primary-font">Иванов Иван</strong>
                                        <small class="pull-right text-muted">
                                            <span class="glyphicon glyphicon-time"></span>&nbsp;&nbsp;15 мая 2015 10:12
                                        </small>
                                    </div>
                                    <p class="comment-text">
                                        Культурная аура произведения, как бы это ни казалось парадоксальным,
                                        многопланово заканчивает определенный синтез искусств. Богатство мировой
                                        литературы от Платона до Ортеги-и-Гассета свидетельствует о том, что типическое
                                        имитирует романтизм. Лабораторность художественной культуры, по определению,
                                        готично использует персональный символический метафоризм.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>
@endsection