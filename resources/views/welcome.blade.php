<!DOCTYPE html>
<html lang="{{ config('app.locale') }}">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>Laravel 5.5 + Angular 4</title>
        <base href="{{ url('') }}">
        <!-- Fonts -->
        <link href="https://fonts.googleapis.com/css?family=Raleway:100,600" rel="stylesheet" type="text/css">

        <link href="{{ asset('build/css/app.css') }}" rel="stylesheet" type="text/css">
    </head>
    <body>
        <my-app>Loading...</my-app>

        <script type="text/javascript" src="{{ asset('build/js/polyfills.js') }}?time={{ time() }}"></script>
        <script type="text/javascript" src="{{ asset('build/js/vendor.js') }}?time={{ time() }}"></script>
        <script type="text/javascript" src="{{ asset('build/js/app.js') }}?time={{ time() }}"></script>
    </body>
</html>
