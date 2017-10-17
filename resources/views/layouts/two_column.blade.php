@extends('layouts.basic')

@section('header')
    @include('sections.header')
@endsection

@section('search_panel')
    @include('sections.search_panel')
@endsection

@section('content')
    <div class="row">
        <div class="col-xs-12 col-md-8">
            @yield('main_column')
        </div>
        <div class="col-xs-12 col-md-4">
            @include('sections.right_column')
        </div>
    </div>
@endsection

@section('footer_links')
    @include('sections.footer_links')
@endsection

@section('footer_copyrights')
    @include('sections.footer_copyrights')
@endsection


