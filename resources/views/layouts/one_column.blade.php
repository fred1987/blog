@extends('layouts.basic')

@section('header')
    @include('sections.header')
@endsection

@section('search_panel')
    @include('sections.search_panel')
@endsection

@section('content')
    @yield('main_column')
@endsection

@section('footer_links')
    @include('sections.footer_links')
@endsection

@section('footer_copyrights')
    @include('sections.footer_copyrights')
@endsection
