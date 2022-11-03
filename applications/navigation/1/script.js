$('.open').click(function(){
    $('.front').fadeOut(500, function(){
        $('.back').fadeIn(500);
    });
    $(this).addClass('active');
    $('.close').addClass('active');
});
$('.close').click(function(){
    $('.back').fadeOut(500, function(){
        $('.front').fadeIn(500);
    });
    $(this).removeClass('active');
    $('.open').removeClass('active');
});