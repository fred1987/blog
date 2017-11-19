<?php

namespace App\Policies;

use App\Models\User;
use Illuminate\Auth\Access\HandlesAuthorization;

class PostPolicy
{
    use HandlesAuthorization;

    public function __construct()
    {
        //
    }

    public function create(User $user)
    {
        return $user->is_admin === 1;
    }

    public function update(User $user)
    {
        return $user->is_admin === 1;
    }

    public function delete(User $user)
    {
        return $user->is_admin === 1;
    }
}
