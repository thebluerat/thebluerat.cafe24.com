$('.tab-menu li').click(function(){
    $(this).addClass('active');
    $(this).siblings().removeClass('active');

    $('.tab-content-box .tab-content').removeClass('active');
    $('#' + $(this).attr('data-alt')).addClass('active');
});