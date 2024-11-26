import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/swiper-bundle.min.css';

const variedSwiper = new Swiper('.swiper', {
  modules: [Pagination],
  slidesPerView: 1,
  spaceBetween: 16,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    // dynamicBullets: false, // Фиксируем количество точек
    // type: 'bullets',
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 16,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 16,
    },
    1280: {
      slidesPerView: 3,
      spaceBetween: 32,
    },
    1440: {
      slidesPerView: 3,
      spaceBetween: 32,
    },
  }
})

export default variedSwiper;