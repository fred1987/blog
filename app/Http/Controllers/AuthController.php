<?php

namespace App\Http\Controllers;

//use App\Http\Requests\RegisterFormRequest;
use Illuminate\Support\Carbon;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Auth;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class AuthController extends Controller
{
    public function register()
    {
        return view('pages.registration', [
            'title' => 'Регистрация'
        ]);
    }

    public function registerPost(Request $request)
    {
        // провалидируем входящие данные
        $validator = Validator::make($request->all(), [
            'name' => 'required|min:3|max:30',
            'email' => 'required|email|unique:users',
            'pswd' => 'required|min:6|max:30',
            'pswd_repeat' => 'required|same:pswd',
            'phone' => 'required',
            'is_accepted' => 'accepted',
        ]);

        if ($validator->fails()) {
            // валидация не прошла, покажем ошибки
            return redirect()->route('register')->withErrors($validator)->withInput();
        } else {
            // создадим запись в БД
            $id = DB::table('users')->insertGetId([
                'name' => $request->input('name'),
                'email' => $request->input('email'),
                'password' => bcrypt($request->input('pswd')),
                'phone' => $request->input('phone'),
                'created_at' => Carbon::createFromTimestamp(time())->format('Y-m-d H:i:s')
            ]);

            // если запись создана, то перенаправляем на главную и авторизовываем пользователя
            if ($id) {
                self::loginPost($request);
                return redirect()->route('main');
            }
        }
    }

    public function login()
    {
        return view('pages.login', [
            'title' => 'Авторизация'
        ]);
    }

    public function loginPost(Request $request)
    {
        $remember = $request->input('remember') ? true : false;
        $authResult = Auth::attempt([
            'email' => $request->input('email'),
            'password' => $request->input('pswd'),
        ], $remember);

        if ($authResult) {
            return redirect()->route('main');
        } else {
            return redirect()
                ->route('login')->with('authError', 'Неправильный логин или пароль!');
        }
    }

    public function logout()
    {
        Auth::logout();
        return redirect()->route('main');
    }

}
