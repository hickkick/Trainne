const burger = document.querySelector('.burger');
const menuList = document.querySelector('.menu__list');
const body = document.querySelector('body');
burger.addEventListener('click', function() {
    menuList.classList.toggle('menu__list_active');
    burger.classList.toggle('burger_active');
    body.classList.toggle('lock');
});

menuList.addEventListener('click', function(e) {
    if(e.target.classList.value == 'menu__link link_hover') {
        menuList.classList.remove('menu__list_active');
        burger.classList.remove('burger_active');
        body.classList.remove('lock');
    }
});