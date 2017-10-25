@extends('layouts.one_column')

@section('main_column')
    @guest
        <div class="boxed  push-down-45">
            <div class="row">
                <div class="col-xs-10  col-xs-offset-1">
                    <div class="register">
                        <h2>Регистрация</h2>
                        <p>Пожалуйста, заполните все поля</p>
                        <form action="{{ route('regPost') }}" method="POST">
                            <div class="row">
                                <div class="col-xs-12">
                                    <input type="text" name="name" placeholder="Ваше имя" value="{{ old('name') }}">
                                    @if ($errors->has('name'))
                                        <span class="error">{{ $errors->first('name') }}</span>
                                    @endif
                                </div>
                                <div class="col-xs-12">
                                    <input type="text" name="email" placeholder="Почта" value="{{ old('email') }}">
                                    @if ($errors->has('email'))
                                        <span class="error">{{ $errors->first('email') }}</span>
                                    @endif
                                </div>
                                <div class="col-xs-12">
                                    <input type="password" name="pswd" placeholder="Придумайте пароль">
                                    @if ($errors->has('pswd'))
                                        <span class="error">{{ $errors->first('pswd') }}</span>
                                    @endif
                                </div>
                                <div class="col-xs-12">
                                    <input type="password" name="pswd_repeat" placeholder="Повторите пароль">
                                    @if ($errors->has('pswd_repeat'))
                                        <span class="error">{{ $errors->first('pswd_repeat') }}</span>
                                    @endif
                                </div>
                                <div class="col-xs-12">
                                    <input type="text" name="phone" placeholder="Номер телефона"
                                           value="{{ old('phone') }}">
                                    @if ($errors->has('phone'))
                                        <span class="error">{{ $errors->first('phone') }}</span>
                                    @endif
                                </div>
                                <div class="col-xs-12">
                                    <p><input type="checkbox" name="is_accepted" id="is_accepted">
                                        <label for="is_accepted">Принять пользовательское соглашение</label></p>
                                    @if ($errors->has('is_accepted'))
                                        <span class="error">{{ $errors->first('is_accepted') }}</span>
                                    @endif
                                </div>
                                <div class="col-xs-12">
                                    <input type="submit" value="Отправить">
                                </div>
                                {{ csrf_field() }}
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
        @else
            <p>{{ Auth::user()->name }}, вы уже зарегистрированы и авторизованы!</p>
            @endguest
@endsection