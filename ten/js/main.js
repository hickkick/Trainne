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