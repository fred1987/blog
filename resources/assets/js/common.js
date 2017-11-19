function showIMGadd(e) {
    var li = document.getElementById('imgWrap');
    if (this.value && !/\.(jpg|jpeg|bmp|gif|png)$/i.test(this.value)) {
        $('#imgWrap').html('<p class="img_error">Выберите файл с расширением jpg, jpeg, bmp, gif или png.</p>');
        $(this).removeClass('active');
    } else {
        var files = e.target.files;
        for (var i = 0, f; f = files[i]; i++) {
            if (!f.type.match('image.*')) continue;
            var fr = new FileReader();
            fr.onload = (function (theFile) {
                return function (e) {
                    li.innerHTML = "<img src='" + e.target.result + "' />";
                    document.getElementById('imgWrap').insertBefore(li, null);
                };
            })(f);
            fr.readAsDataURL(f);
        }
        $(this).addClass('active');
        $('.file_img_wrap .btn_img').addClass('active').text('Выбрать другую картинку');
    }
}

document.getElementById('files').addEventListener('change', showIMGadd, false);