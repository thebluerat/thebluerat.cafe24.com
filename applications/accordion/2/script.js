$('.item:nth-of-type(1) .content').show();
$('.title').click(function(){
    $(this).parent('.item').siblings('.item').children('.content').slideUp();
    $(this).next().slideDown();
    $(this).parent('.item').siblings('.item').children('.title').removeClass('active');
    $(this).addClass('active');
});