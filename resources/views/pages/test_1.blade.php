@extends('layouts.one_column')

@section('main_column')
    <h1>Test 1</h1>
    <p>Текущее время {{ $current_time }}</p>
    <p>{{ $coffee }}</p>
@endsection