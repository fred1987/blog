import CommentService from './CommentService'

Echo.join('post.comments')
    .listen('CommentAdd', (e) => {
        CommentService.$emit('comment.added', e);
    });