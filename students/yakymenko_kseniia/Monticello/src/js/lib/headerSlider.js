import $ from 'jquery';
import 'slick-carousel';

function headerSlider() {
    $('.header-section__slider').slick({
        infinite: true,
        slidesToShow: 1,
        appendDots: $('.header-section__dots'),
        dots: true,
        arrows: false,
    });
};

export default headerSlider;
