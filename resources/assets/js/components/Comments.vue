<template>
    <div class="comments">
        <h6 v-if="comments.length > 0">Комментарии</h6>
        <hr v-if="comments.length > 0">
        <comment v-for="cmt in comments" :cmt="cmt" :key="cmt.id"></comment>
        <div class="row" v-if="auth">
            <div class="col-xs-12">
                    <textarea style="width: 100%; margin-bottom: 15px; padding: 7px; border: 1px solid #e0e0e0;"
                              rows="3" placeholder="Напишите комментрай..."
                              v-model="comment.comment"
                    ></textarea>
                <a href="#" @click.prevent="addComment" class="btn btn-primary">Отправить</a>
            </div>
        </div>
        <div class="row" v-else="auth">
            <p><a href="/login">Авторизуйтесь</a>, чтобы писать комментарии</p>
        </div>
    </div>
</template>

<script>
    import CommentService from '../CommentService'

    export default {
        props: ['post_id'],
        data() {
            return {
                auth: (Laravel.user),
                comments: [],
                comment: {
                    user_id: (Laravel.user) ? Laravel.user.id : null,
                    post_id: this.post_id,
                    comment: '',
                    user_name: (Laravel.user) ? Laravel.user.profile.name : null
                }
            }
        },
        created() {
            axios.post('/comment/get', {
                'id': this.post_id
            }).then((res) => {
                this.comments = res.data;
            }).catch((err) => {
                console.error(err);
            });
        },
        methods: {
            addComment() {
                axios.post('/comment', this.comment).then(() => {
                    this.comment.comment = '';
                }).catch((err) => {
                    console.error(err);
                });
            }
        },
        mounted() {
            CommentService.$on('comment.added', (comment) => {
                this.comments.push(comment);
            });
        }
    }
</script>
