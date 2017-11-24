<?php

Broadcast::channel('post.comments.{$id}', function ($user, $id) {
    if ($user) {
        return [
            'id' => $user->id,
            'name' => $user->profile->name,
            'post_id' => $id
        ];
    } else {
        return [
            'post_id' => $id
        ];
    }
});