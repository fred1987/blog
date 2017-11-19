<?php

namespace App\Http\Controllers;

use App\Events\CommentAdd;
use App\Http\Requests\CommentAddRequest;
use App\Models\Comment;
use Illuminate\Http\Request;

class CommentController extends Controller
{
    public function addNew(CommentAddRequest $request)
    {
        $comment = Comment::create([
            'user_id' => $request->user_id,
            'comment' => $request->comment,
            'post_id' => $request->post_id,
            'user_name' => $request->user_name
        ]);

        if ($comment) broadcast(new CommentAdd($comment));
    }

    public function cmts(Request $request)
    {
        return Comment::where('post_id', $request->id)->latest()->get();
    }
}
