@section('header')
    <header class="header  push-down-45">
        <div class="container">
            <div class="col-xs-12" style="margin-bottom: 15px; text-align: right; position: relative;">
                @guest
                    <p>Добро пожаловать, гость! <a href="/login">Авторизоваться</a></p>
                    @else
                        <p>Добро пожаловать, {{ $user_name }}!

                            <a href="{{ route('logout') }}"
                               onclick="event.preventDefault();
                                                     document.getElementById('logout-form').submit();">
                                Выйти
                            </a>

                        <form id="logout-form" action="{{ route('logout') }}" method="POST" style="display: none;">
                            {{ csrf_field() }}
                        </form>
                        @endguest
            </div>
            <div class="logo pull-left">
                <a href="/">
                    <img src="{{ asset('images/logo.png') }}" alt="Logo" width="352" height="140">
                </a>
            </div>
            <div class="navbar-header">
                <button type="button" class="navbar-toggle" data-toggle="collapse"
                        data-target="#readable-navbar-collapse">
                    <span class="sr-only">Toggle navigation</span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                </button>
            </div>
            <nav class="navbar navbar-default" role="navigation">
                <div class="collapse  navbar-collapse" id="readable-navbar-collapse">
                    <ul class="navigation">
                        <li class="dropdown active">
                            <a href="/" class="dropdown-toggle" data-toggle="dropdown">Главная</a>
                        </li>
                        <li class="">
                            <a href="/elements" class="dropdown-toggle" data-toggle="dropdown">Верстка</a>
                        </li>
                        <li class="">
                            <a href="/about" class="dropdown-toggle" data-toggle="dropdown">Обо мне</a>
                        </li>
                        <li class="">
                            <a href="/contacts" class="dropdown-toggle" data-toggle="dropdown">Обратная связь</a>
                        </li>
                        <li class="">
                            <a href="/registration" class="dropdown-toggle" data-toggle="dropdown">Регистрация</a>
                        </li>
                    </ul>
                </div>
            </nav>
            <div class="hidden-xs hidden-sm">
                <a href="#" class="search__container  js--toggle-search-mode"> <span
                            class="glyphicon  glyphicon-search"></span> </a>
            </div>
        </div>
    </header>
@endsection