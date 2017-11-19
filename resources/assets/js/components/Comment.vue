<template>
    <div class="comment clearfix">
        <div class="comment-body clearfix">
            <div class="comment-header">
                <strong class="primary-font">{{ cmt.user_name }}</strong>
                <small class="pull-right text-muted">
                    <span class="glyphicon glyphicon-time"></span>{{ cmt.created_at }}
                </small>
            </div>
            <p class="comment-text">
                {{ cmt.comment }}
            </p>
        </div>
    </div>
</template>

<script>
    export default {
        props: ['cmt']
    }
</script>