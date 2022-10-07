import $ from 'jquery';
import 'slick-carousel';

const breakpoints = {
    max: 4000,
    lg: 1281,
    md: 769,
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
                    slidesToScroll: 2,
                }
            }
        ]
    });



const burger = document.querySelector(".mobile__burger");
burger.addEventListener('click', menuOpener);

function menuOpener(event) {
    console.log(event.target);
    document.querySelector(".mobile__nav").classList.toggle("hidden");
}
