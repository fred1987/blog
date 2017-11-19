<?php

namespace App\Http\Controllers\Admin;

use App\Http\Requests\ArticleRequest;
use App\Http\Controllers\Controller;
use App\Models\Post;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class ArticleController extends Controller
{

    public function addForm(Request $request)
    {
        $data = ($request->has('id')) ? Post::find($request->id) : null;

        return view('pages.create_post', [
            'title' => 'Добавить новый пост',
            'data' => $data
        ]);
    }

    public function delete(Request $request)
    {
        if ($request->has('id')) {
            Post::find($request->id)->delete();
            return redirect('/');
        } else {
            return 'Поста с таким id не существует';
        }
    }

    public function create(ArticleRequest $request)
    {

        // не завелось пока
//        if ($request->hasFile('preview_img')) {
//            $request->file('preview_img')->store('', 'public/img/posts');
//        }


        $post = Post::create([
            'headline' => $request->headline,
            'preview_text' => $request->preview_text,
            'detail_text' => $request->detail_text,
            'slug' => translit($request->headline),
            'user_id' => Auth::id(),

        ]);

        if ($post) {
            return redirect('/');
        } else {
            abort(500);
        }
    }

    public function update(ArticleRequest $request)
    {
        $post = Post::find($request->id)->update([
            'headline' => $request->headline,
            'preview_text' => $request->preview_text,
            'detail_text' => $request->detail_text,
            'slug' => translit($request->headline),
            'user_id' => Auth::id(),
        ]);

        return redirect('/');
    }
}
