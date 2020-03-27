const HEADER_BTN = document.querySelector('.header__content-decore');
const BURGER = document.querySelector('.burger');


HEADER_BTN.addEventListener('click',  function(event) {
    HEADER_BTN.classList.toggle('pos');
});

BURGER.addEventListener('click', function(event) {
    let nav = document.querySelector('.menu'),
        list = document.querySelector('.menu__list'),
        body = document.querySelector('body');
    BURGER.classList.toggle('burger-active');
    nav.classList.toggle('burger-active');
    list.classList.toggle('burger-active');
    body.classList.toggle('lock');
});

$(function(){

    $('.slider').slick ({
        prevArrow: '<img class="slider-arrows slider-arrows__left" src="images/arrow_right.svg" alt=""></img>',
        nextArrow: '<img class="slider-arrows slider-arrows__right" src="images/arrow_left.svg" alt=""></img>',
        dots: true,
    });

    $('.video__content').parent().click(function () {

        if($(this).children(".video__content").get(0).paused){       
       $(this).children(".video__content").get(0).play();   
      $(this).children(".playpause").fadeOut();
      
          }else{      
       $(this).children(".video__content").get(0).pause();
      
        $(this).children(".playpause").fadeIn();
      
          }
      
      });

});

////  counter for site //////
// const time = 5000; //ms
// const step = 5;  // step

// function outNum(num, elem) {
//     let l = document.querySelector('#' + elem);
//     n = 0;
//     let t = Math.round(time / (num / step));
//     let interval = setInterval( () => {
//         n = n + step;
//         if (n == num) {
//             clearInterval(interval);
//         }
//         l.innerHTML = n;
//     },
//         t);
// }

// outNum(305, 'out-1');
// outNum(220, 'out-2');
// outNum(55, 'out-3');
// outNum(80, 'out-4');



