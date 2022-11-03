// main-popup
$('.popup-arrow').click(function(){
    $('.main-popup').addClass('active');
    $('#' + $(this).attr('data-alt')).addClass('active');
})
$('.popup-close, .main-popup-back').click(function(){
    $('.main-popup, .main-popup-description').removeClass('active');
})
// Works
$('.list li').click(function(){
    $(this).addClass('active');
    $(this).siblings().removeClass('active');
    $('.contents .content').removeClass('active');
    $('#' + $(this).attr('data-alt')).addClass('active');
})