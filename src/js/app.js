import * as flsFunctions from "./modules/functions.js";
import "./modules/jquery-3.7.1.min.js";
import "./modules/fslightbox.js";
import "./modules/bootstrap.bundle.min.js";
import './components.js';

flsFunctions.isWebp();

// Import swiper
import Swiper, { Navigation, Pagination, Autoplay, Mousewheel, EffectFade, Thumbs, Scrollbar } from 'swiper';
Swiper.use([Navigation, Pagination, Autoplay, Mousewheel, EffectFade, Thumbs, Scrollbar]);

// Инициализация слайдера studySlider
const studySlider = document.querySelector('.studySlider');
var mySwiperStudy = new Swiper(studySlider, {
  slidesPerView: 3,
  speed: 800,
  spaceBetween: 30,
  navigation: {
    nextEl: document.querySelector('.study .sliderArrowNext'),
    prevEl: document.querySelector('.study .sliderArrowPrev'),
  },
  pagination: {
    el: document.querySelector('.study .swiper-pagination'),
    clickable: true,
    type: 'bullets',
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    992: {
      slidesPerView: 3,
    },
  },
});

// Burger
const btnMenu = document.querySelector('#toggle');
const menu = document.querySelector('.headerNav');

const bodyEl = document.querySelector('body');
const menuLine1 = document.querySelector('.top-bun');
const menuLine2 = document.querySelector('.meat');
const menuLine3 = document.querySelector('.bottom-bun');
let navItemAll = document.querySelectorAll('.headerNavList li a');

const toggleMenu = function () {
  menu.classList.toggle('active');
}
const toggleBurger = function () {
  btnMenu.classList.toggle('active');
}
const toggleMenuLine = function () {
  menuLine1.classList.toggle('active');
  menuLine2.classList.toggle('active');
  menuLine3.classList.toggle('active');
}
const bodyOverflow = function () {
  bodyEl.classList.toggle('hidden');
}

btnMenu?.addEventListener('click', function (e) {
  e.stopPropagation();
  toggleMenu();
  toggleBurger();
  bodyOverflow();
  toggleMenuLine();
});

// close menu in Landing page
$(document).on("click", ".headerNavList li a", function (e) {
  $('.headerNav').removeClass('active');
  $('body').removeClass('hidden');
  toggleBurger();
  toggleMenuLine();
});

