@extends('layouts.one_column')

@section('main_column')
    <div class="boxed  push-down-45">
        <div class="row">
            <div class="col-xs-10  col-xs-offset-1">
                <div class="register" style="padding-bottom: 30px;">
                    <h2>Авторизация</h2>
                    @if(session('authError'))
                        {{ session('authError') }}
                    @endif
                    <form action="{{ route('loginPost') }}" method="POST">
                        <div class="row">
                            <div class="col-xs-12">
                                <input type="text" name="email" placeholder="E-mail" value="{{ old('email') }}">
                            </div>
                            <div class="col-xs-12">
                                <input type="password" name="pswd" placeholder="Пароль">
                            </div>
                            <div class="col-xs-12">
                                <p><input type="checkbox" name="remember" id="remember">
                                    <label for="remember">Запомнить меня</label></p>
                            </div>
                            {{ csrf_field() }}
                            <div class="col-xs-12">
                                <input type="submit" value="Авторизоваться">
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
@endsection
