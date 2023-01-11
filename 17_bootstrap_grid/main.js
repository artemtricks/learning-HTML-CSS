let burger = document.querySelector('.burger');
let menu = document.querySelector('.nav');
let menuLinks = menu.querySelectorAll(`${'.nav__close'}, ${'.nav__link'}`);

burger.addEventListener('click', function () {
    menu.classList.toggle('nav--active');
    document.body.classList.toggle('stop-scroll');

});

menuLinks.forEach(function (el) {
    el.addEventListener('click', function () {
        menu.classList.remove('nav--active');
        document.body.classList.remove('stop-scroll');
    })

});
