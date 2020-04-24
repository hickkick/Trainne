$(function(){

    $('.snowboards-slider').slick({
        centerMode: true,
        prevArrow: '<button class="slick-arrow slick-prev"><img src="img/prev.png" alt="arrow"></button>',
        nextArrow: '<button class="slick-arrow slick-next"><img src="img/next.png" alt="arrow"></button>',
        centerPadding: '150px',
        slidesToShow: 3,
        responsive: [
            {
              breakpoint: 990,
              settings: {
                // arrows: false,
                centerMode: true,
                centerPadding: '300px',
                slidesToShow: 1
              }
            },
            {
                breakpoint: 820,
                settings: {
                  // arrows: false,
                  centerMode: true,
                  centerPadding: '200px',
                  slidesToShow: 1
                }
            },
            {
              breakpoint: 650,
              settings: {
                arrows: false,
                dots:true,
                centerMode: true,
                centerPadding: '40px',
                slidesToShow: 1
              }
            },
            {
                breakpoint: 320,
                settings: {
                  arrows: false,
                  dots:true,
                  centerMode: true,
                  centerPadding: '20px',
                  slidesToShow: 1
                }
              }
          ]
    });

    $('.ham').on('click', function () {
        $('.menu').toggleClass('active');
    });
  
});