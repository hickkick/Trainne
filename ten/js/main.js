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


    $('.btn__menu').on('click', function(){
        $('.menu__list').slideToggle();
    });
});