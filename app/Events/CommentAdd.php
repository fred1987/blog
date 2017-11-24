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
        //транслируем событие добавления комментария всем пользователям
        //для появления комментария у всех пользователей без перезагрузки стр
        return new Channel('post.comments.' . $this->comment->post->id);
    }

    public function broadcastWith()
    {
        return $this->comment->toArray();
    }
}
