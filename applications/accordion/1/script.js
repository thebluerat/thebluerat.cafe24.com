$('.title').click(function(){
    $(this).addClass('active');
    $(this).siblings('.title').removeClass('active');
    $(this).siblings('.contents').stop().slideUp();
    $(this).next().stop().slideDown();

    var changingimg = $(this).attr('data-img');
    $('.img img').attr('src', changingimg)
});