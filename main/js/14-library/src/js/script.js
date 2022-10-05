import Swiper, { Navigation, Pagination, Scrollbar } from 'swiper';
import Masonry from 'masonry-layout';

const elem = document.querySelector('.grid');
const msnry = new Masonry(elem, {
    itemSelector: '.grid-item',
    columnWidth: '.grid-item',
    percentPosition: true
});

// const sliderElem = document.querySelector('.dddd');

// const swiper = new Swiper(sliderElem, {
//     modules: [Navigation, Pagination, Scrollbar],
//     loop: true,
//     pagination: {
//         el: sliderElem.querySelector('.swiper-pagination'),
//         clickable: true,
//     },
//     navigation: {
//         nextEl: sliderElem.querySelector('.swiper-button-next'),
//         prevEl: sliderElem.querySelector('.swiper-button-prev'),
//     },
//     scrollbar: {
//         el: sliderElem.querySelector('.swiper-scrollbar'),
//     },
// });

// const swiper1 = new Swiper(".mySwiper", {
//     modules: [Navigation, Pagination, Scrollbar],
//     loop: true,
//     spaceBetween: 20,
//     slidesPerView: 4,
//     freeMode: true,
//     watchSlidesProgress: true,
// });
// const swiper2 = new Swiper(".mySwiper2", {
//     modules: [Navigation, Pagination, Scrollbar],
//     loop: true,
//     spaceBetween: 20,
//     navigation: {
//         nextEl: ".swiper-button-next",
//         prevEl: ".swiper-button-prev",
//     },
//     thumbs: {
//         swiper: swiper,
//     },
// });
