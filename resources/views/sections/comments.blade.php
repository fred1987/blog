<div class="row">
    <div class="col-xs-12 col-sm-12">
        <div class="comments">
            <h6>Комментарии</h6>
            <hr>
            @foreach($comments as $comment)
                <div class="comment clearfix">
                    @if($comment->user->profile->photo)
                        <div class="comment-avatar pull-left">
                            <img src="{{ $comment->user->profile->photo }}" alt="User Avatar"
                                 class="img-circle comment-avatar-image">
                        </div>
                    @endif
                    <div class="comment-body clearfix">
                        <div class="comment-header">
                            <strong class="primary-font">{{ $comment->user->profile->name }}</strong>
                            <small class="pull-right text-muted">
                                <span class="glyphicon glyphicon-time"></span>{{ $comment->created_at }}
                            </small>
                        </div>
                        <p class="comment-text">
                            {{ $comment->comment }}
                        </p>
                    </div>
                </div>
            @endforeach
        </div>
    </div>
</div>
