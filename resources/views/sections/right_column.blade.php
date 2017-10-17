@section('right_column')
    @includeIf('widgets.me');
    <div class="sidebar  boxed  push-down-30">
        <div class="row">
            <div class="col-xs-10  col-xs-offset-1">
                @includeIf('widgets.right_menu')
                @includeIf('widgets.featured_post')
                @includeIf('widgets.posts')
                @includeIf('widgets.tags')
            </div>
        </div>
    </div>
@show