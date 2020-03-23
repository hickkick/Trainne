$(function(){

    $('.slider').slick ({
        arrows: false,
        autoplay: 3000,
        fade: true,
        dots: true,
    });

    $('.header-btn').on('click', function() {
        $('.menu').addClass('active');
    });

    $('.close-btn').on('click', function() {
        $('.menu').removeClass('active'); 
    });

});