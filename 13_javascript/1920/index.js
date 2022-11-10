 //TAb

 let tabsBtn = document.querySelectorAll('.working__item-link');
 let tabsItem = document.querySelectorAll('.tabs-item');
 
 tabsBtn.forEach(function(element) {
     element.addEventListener('click', function(e) {
     const path = e.currentTarget.dataset.path;
 
     tabsBtn.forEach(function(btn){btn.classList.remove('working__item-link--active')});
     e.currentTarget.classList.add('working__item-link--active');
 
     tabsItem.forEach(function(element){element.classList.remove('tabs-item--active')});
     document.querySelector(`[data-target="${path}"]`).classList.add('tabs-item--active');
     
    });
});

//Hero-swiper

 const container = document.querySelector(".container")
 const swiper = new Swiper('.hero__swiper', {
 
     direction: 'horizontal',
     loop: true,
     speed: 300,
     
     pagination: {
       el: '.swiper-pagination',
       type: 'bullets',
     clickable: true
     }
   });

   
  //Burger

let burger = document.querySelector('.burger');
let menu = document.querySelector('.header__nav');
let menuLinks = menu.querySelectorAll(`${'.nav__close'}, ${'.nav__link'}`); 
  
burger.addEventListener('click', function () {
    burger.classList.toggle('burger--active');
    menu.classList.toggle('header__nav--active');
    document.body.classList.toggle('stop-scroll');
});
  
menuLinks.forEach(function (el) {
    el.addEventListener('click', function () {
        burger.classList.remove('burger--active');
        menu.classList.remove('header__nav--active');
        document.body.classList.remove('stop-scroll');
    })
  
});

  //Search-form


document.querySelector(".header__btn").addEventListener("click", function() {
    document.querySelector(".header__form").classList.add("form__active");
    this.classList.add("active");
  });
  
 document.querySelector(".form-btn__close").addEventListener("click", function() {
     let form = document.querySelector(".header__form");
    form.classList.remove("form__active");
      form.querySelector("input").value = "";
      document.querySelector(".form-btn__open").classList.remove("active")
  });
  
  
  document.addEventListener("click", function(e) {
    let target = e.target;
    let form = document.querySelector(".header__form");
    if (!target.closest(".form-container")) {
    form.classList.remove("form__active");
      form.querySelector("input").value = "";
      document.querySelector(".header__btn").classList.remove("active")
    }
  });

// Accordion

new Accordion('.container-first');

// User options
new Accordion('.container-second', {
  duration: 400,
  showMultiple: true,
  onOpen: function(currentElement) {
    console.log(currentElement);
  }
});
/*
// Define several accordions with the same options (pass an array with selectors)
new Accordion(['.container-first', '.container-second'], {});

// or pass an array with HTMLElements
const accordions = Array.from(document.querySelectorAll('.accordion-container'));
new Accordion(accordions, {});

// Detach events
const accordion = new Accordion('.container-first');
accordion.detachEvents();*/

 

 
