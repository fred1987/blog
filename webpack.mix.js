let mix = require('laravel-mix');

mix.js(['resources/assets/js/app.js', 'resources/assets/js/main.js'], 'public/js/app.js')
    .styles(['resources/assets/css/main.css'], 'public/css/app.css');

