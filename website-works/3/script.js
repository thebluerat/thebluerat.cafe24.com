$(window).scroll(function(){
    if($(window).scrollTop() > 50) {
        $('header, .gotop').addClass('active')
    } else {
        $('header, .gotop').removeClass('active')
    }
})