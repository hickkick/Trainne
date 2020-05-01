$(function(){

    $('.slider-items').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        nextArrow: '<img class="slider-arrows slider-arrows__right" src="img/arrow.png"></img>',
        prevArrow: '<img class="slider-arrows slider-arrows__left" src="img/arrow.png"></img>',
        dots: true,
        responsive: [
            {
                breakpoint: 1450,
                settings: {
                    arrows: false,
                }
            },
        ]
    });

    $('.post-slider').slick({
        infinite: true,
        centerMode: true,
        centerPadding: '0px',
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: true,
        nextArrow: '<img class="post-slider__arrows right" src="img/right.svg"></img>',
        prevArrow: '<img class="post-slider__arrows left" src="img/left.svg"></img>',
        dots: false,
        responsive: [
            {
                breakpoint: 1110,
                settings: {
                    slidesToShow: 2, 
                }
            },
            {
                breakpoint: 800,
                settings: {
                    slidesToShow: 1, 
                }
            }
        ]
    });

    
    $('.post-slider__inner-slider').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots: true,
    });

    $('.header__burger').click( function(event) {
        $('.header__burger,.menu').toggleClass('active');
        $('body').toggleClass('lock');
    });

});

// var header = $('.header'),                // this is a real magic (for disepier menu)
// 	scrollPrev = 0;

//     $(window).scroll(function() {
//         var scrolled = $(window).scrollTop();
    
//         if ( scrolled > 10 && scrolled > scrollPrev ) {
//             header.addClass('out');
//         } else {
//             header.removeClass('out');
//             header.addClass('bg');
//         }
//         scrollPrev = scrolled;
//     });