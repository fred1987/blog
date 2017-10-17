@section('me')
    <div class="widget-author  boxed  push-down-30">
        <div class="widget-author__image-container">
            <div class="widget-author__avatar--blurred">
                <img src="{{ asset('images/dummy/about-1.jpg') }}" alt="Avatar image" width="90"
                     height="90">
            </div>
            <img class="widget-author__avatar" src="{{ asset('images/dummy/about-1.jpg') }}"
                 alt="Avatar image" width="90"
                 height="90">
        </div>
        <div class="row">
            <div class="col-xs-10  col-xs-offset-1">
                <h4>{{ $myName  }}</h4>
                <p>Web разработчик, PHP разработчик</p>
            </div>
        </div>
    </div>
@show