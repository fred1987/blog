@section('header')
    <header class="header  push-down-45">
        <div class="container">
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
                        <li class="dropdown">
                            <a href="#" class="dropdown-toggle" data-toggle="dropdown">Тест</a>
                            <ul class="navigation__dropdown">
                                <li><a href="/test/1">test 1</a></li>
                                <li><a href="/test/2">test 2</a></li>
                            </ul>
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