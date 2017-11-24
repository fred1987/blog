@extends('layouts.two_column')

@section('main_column')
    <div class="boxed push-down-45">
        <div class="row">
            <div class="col-xs-10  col-xs-offset-1">
                <div class="contact">
                    <h2>@if($data)Редактирование поста@elseНовый пост@endif</h2>
                    <form
                            action="@if($data){{ route('admin.posts.update') }}@else{{ route('admin.posts.postCreate') }}@endif"
                            method="POST"
                            class="addForm"
                            enctype="multipart/form-data"
                    >
                        {{ csrf_field() }}
                        <div class="row">
                            <div class="col-xs-12">
                                <input
                                        type="text"
                                        placeholder="Заголовок поста"
                                        name="headline"
                                        value="@if(isset($data->headline)){{ $data->headline }}@else{{ old('headline') }}@endif">
                            </div>
                            <div class="col-xs-12">
                                <div id="imgWrap">
                                    @if(isset($data->preview_img))
                                        <img src="{{ $data->preview_img }}" alt="preview image">
                                    @endif
                                </div>
                                <div class="file_img_wrap">
                                    <input name="preview_img" id="files" type="file">
                                    <span class="btn_img">Выбрать @if(isset($data->preview_img))другую картинку@else
                                            картинку
                                            для анонса@endif</span>
                                </div>
                            </div>
                            @if($data)
                                <input type="hidden" name="id" value="{{ $data->id }}">
                            @endif
                            <div class="col-xs-12">
                <textarea
                        rows="3"
                        placeholder="Анонс"
                        name="preview_text">@if(isset($data->preview_text)){{ $data->preview_text }}@else{{ old('preview_text') }}@endif</textarea>
                            </div>
                            <div class="col-xs-12">
                <textarea
                        rows="6"
                        placeholder="Основной текст"
                        name="detail_text">@if(isset($data->detail_text)){{ $data->detail_text }}@else{{ old('detail_text') }}@endif</textarea>
                                <button type="submit" class="btn btn-primary">Сохранить</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
@endsection
