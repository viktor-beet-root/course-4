import $ from 'jquery';
import 'slick-carousel';

$(document).ready(function () {
    $('.headerSlider').slick(
        {
            arrows: false,
            dots: true,
            autoplay: true,
            autoplaySpeed: 5000,
            pauseOnFocus: true,
            pauseOnHover: true,
            pauseOnDotsHover: true,
        });
});

$(document).ready(function () {
    $('.productsSlider').slick(
        {
            arrows: true,
            dots: false,
            autoplay: false,
            infinite: true,
            slidesToShow: 5,
        });
});

$(document).ready(function () {
    $('.partnersSlider').slick(
        {
            arrows: true,
            dots: false,
            autoplay: false,
            infinite: true,
            slidesToShow: 9,
        });
});


