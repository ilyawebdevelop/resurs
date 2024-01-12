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
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    576: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 3,
    },
  },
});



