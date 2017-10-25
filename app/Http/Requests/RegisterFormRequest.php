<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class RegisterFormRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'name' => 'required|min:3|max:30',
            'email' => 'required|email|unique:users|max:100',
            'pswd' => 'required|min:6|max:30',
            'pswd_repeat' => 'required|same:pswd',
            'phone' => 'required',
            'is_accepted' => 'accepted',
        ];
    }
}
