$(window).scroll(function(){
    var winScroll = $(this).scrollTop();
    console.log(winScroll);
    $('.slider').css({
        'transform': 'translate (0,' + winScroll / 22 + '%)'
    });
    $('.slider1').css({
        'transform': 'translate (0,' + winScroll / 33 + '%)'
    });
    $('.slider2').css({
        'transform': 'translate (0,' + winScroll / 44 + '%)'
    });
});