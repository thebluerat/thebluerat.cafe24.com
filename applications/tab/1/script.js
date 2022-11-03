$('.text-content').hide().eq(0).show();
$('.photos img').click(function(){
    $(this).addClass('active');
    $(this).siblings().removeClass('active');
    $('.text-content').fadeOut();
    $('#' + $(this).attr('data-alt')).fadeIn();
});