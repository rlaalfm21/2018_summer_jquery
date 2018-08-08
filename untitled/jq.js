function slide() {
    var pos = 0;
    var timer = 0;
    var len = $('#slide-up li').length;

    function play() {
        clearTimeout(timer);
        pos++;
        if (++pos >= len) pos = 0;
        else if (pos < 0) pos = len - 1;
        $('#slide-up li .active').css('margin-top','pos'+400+'px');
        $('#slide-fade li').eq(pos).addClass('active');
        $('.pos a.active').removeClass('active');
        $('.pos a').eq(pos).addClass('active');
        timer = setTimeout(play, 2000);
    }

    $(document).on('click', '.arow', function () {
        if ($(this).hasClass('left')) pos -= 2;
        play()
    })
        .on('click', '.pos a', function () {
            pos = $(this).index() - 1
        });
    timer = setTimeout(play, 2000)
}