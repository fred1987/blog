<!doctype html>
<html lang="{{ app()->getLocale() }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="">
    <link rel="shortcut icon" href="{{ asset('images/favicon.png') }}">
    <title>{{ $title  }}</title>
    <link href='https://fonts.googleapis.com/css?family=Roboto+Condensed:400,700,400italic|Roboto:400,700,500|Open+Sans:400,600&subset=latin,cyrillic'
          rel='stylesheet' type='text/css'>
    <link rel="stylesheet" href="{{ asset('css/app.css') }}"/>
<body>

@yield('header')

@yield('search_panel')

<div class="container">
    @yield('content')
</div>

@yield('footer_links')

@yield('footer_copyrights')

@section('scripts')
    <script src="{{ asset('js/main.js')  }}"></script>
@show
</body>
</html>