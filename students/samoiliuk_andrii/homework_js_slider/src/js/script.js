import $ from 'jquery';
import 'slick-carousel';

const breakpoints = {
    max: 4000,
    lg: 1280,
    md: 768,
}


$('.headerSlider').slick(
    {
        arrows: false,
        dots: true,
        autoplay: true,
        autoplaySpeed: 2500,
        pauseOnFocus: true,
        pauseOnHover: true,
        pauseOnDotsHover: true,
    });

$('.productsSlider').slick(
    {
        responsive: [
            {
                breakpoint: breakpoints.max,
                settings: {
                    arrows: true,
                    dots: false,
                    autoplay: false,
                    infinite: true,
                    slidesToShow: 5,
                }
            },
            {
                breakpoint: breakpoints.lg,
                settings: {
                    arrows: true,
                    slidesToShow: 3
                }
            },
            {
                breakpoint: breakpoints.md,
                settings: {
                    arrows: false,
                    dots: true,
                    slidesToShow: 1,
                }
            }
        ]
    });

$('.partnersSlider').slick(
    {
        responsive: [
            {
                breakpoint: breakpoints.max,
                settings: {
                    arrows: true,
                    dots: false,
                    autoplay: false,
                    infinite: true,
                    slidesToShow: 9,
                }
            },
            {
                breakpoint: breakpoints.lg,
                settings: {
                    arrows: true,
                    slidesToShow: 6
                }
            },
            {
                breakpoint: breakpoints.md,
                settings: {
                    arrows: false,
                    dots: true,
                    slidesToShow: 2,
                }
            }
        ]
    });



