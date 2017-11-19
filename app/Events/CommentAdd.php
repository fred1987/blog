<?php

namespace App\Events;

use App\Models\Comment;
use Illuminate\Broadcasting\Channel;
use Illuminate\Queue\SerializesModels;
use Illuminate\Broadcasting\PrivateChannel;
use Illuminate\Broadcasting\PresenceChannel;
use Illuminate\Foundation\Events\Dispatchable;
use Illuminate\Broadcasting\InteractsWithSockets;
use Illuminate\Contracts\Broadcasting\ShouldBroadcast;

class CommentAdd implements ShouldBroadcast
{
    use Dispatchable, InteractsWithSockets, SerializesModels;

    private $comment;

    public function __construct(Comment $comment)
    {

        $this->comment = $comment;
    }

    public function broadcastOn()
    {
        return new PresenceChannel('post.comments');
    }

    public function broadcastWith()
    {
        //pusher почему то работает только с аутентифицированными пользователями
        //без аутентификации выдает ошибку в консоли браузера 403(доступ запрещен)
        return $this->comment->toArray();
    }
}
