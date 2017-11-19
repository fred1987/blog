<?php

namespace App\Http\Controllers;

use App\Http\Requests\RegisterFormRequest;
use App\Models\Profile;
use App\Models\User;
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

    public function registerPost(RegisterFormRequest $request)
    {
        // создадим пользователя
        $user = User::create([
            'email' => $request->input('email'),
            'password' => bcrypt($request->input('pswd')),
            'is_admin' => ($request->is_admin === 'on')
        ]);

        // создадим его профайл
        Profile::create([
            'user_id' => $user->id,
            'name' => $request->input('name'),
            'phone' => $request->input('phone')
        ]);

        // если запись создана, то перенаправляем на главную и авторизовываем пользователя
        if ($user->id) {
            Auth::loginUsingId($user->id, $request->input('remember') ? true : false);
            return redirect()->route('main');
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
