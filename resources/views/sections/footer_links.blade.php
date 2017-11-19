@section('footer_links')
    <footer class="footer">
        <div class="container">
            <div class="col-xs-12 col-md-3">
                <nav class="widget-navigation push-down-30">
                    <h6>Я в социальных сетях</h6>
                    <hr>
                    <div class="social-icons  widget-social-icons">

                    </div>
                </nav>
            </div>

            <div class="col-xs-12 col-md-3 col-md-offset-1">
                <nav class="widget-navigation push-down-30">
                    <h6>Навигация</h6>
                    <hr>
                    <ul class="navigation">
                        <li><a href="/">Домашняя</a></li>
                        <li><a href="/about">Обо мне</a></li>
                    </ul>
                </nav>
            </div>
            <div class="col-xs-12 col-md-4 col-md-offset-1">
                <div class="widget-contact push-down-30">
                    <h6>Контакты</h6>
                    <hr>
                    <span class="widget-contact__text">
                    <span class="widget-contact__title">{{ $myFullName  }}</span>
                    <br>Email: {{ $email  }}
                        <br>Skype: {{ $skype  }}
                        <br>VK: {{ $vk  }}
                    </span>
                </div>
            </div>
        </div>
    </footer>
@endsection