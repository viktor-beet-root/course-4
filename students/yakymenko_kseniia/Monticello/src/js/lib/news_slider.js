import $ from 'jquery';
import 'slick-carousel';

function newsSlider() {
    $(document).ready(function () {
        $('.news-slider').slick({
            slidesToShow: 3,
            prevArrow: $('.news__navigation-previous'),
            nextArrow: $('.news__navigation-next'),

            appendDots: $('.news__section-dots'),
            dots: true,

            autoplay: true,
            autoplaySpeed: 4000,

            responsive: [{
                breakpoint: 992,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 769,
                settings: {
                    slidesToShow: 1
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1
                }
            },
            ]
        });
    });
};

export default newsSlider;
