import $ from 'jquery';
import 'slick-carousel';

const breakpoints = {
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
        arrows: true,
        dots: false,
        autoplay: false,
        infinite: true,
        slidesToShow: 5,
        responsive: [
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
        arrows: true,
        dots: false,
        autoplay: false,
        infinite: true,
        slidesToShow: 9,
        responsive: [
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



const menu = document.querySelector(".mobile__nav");

document.body.addEventListener('click', menuOpen);

function menuOpen(event) {
    if (event.target.closest(".mobile__burger") && menu.classList.contains("hidden")) {
        menu.classList.remove('hidden');
        document.body.removeEventListener('click', menuOpen);
        document.body.addEventListener('click', menuClose);
    }
}

function menuClose(event) {
    if (event.target.closest('.mobile__nav') === null && !menu.classList.contains("hidden")) {
        document.querySelector(".mobile__nav").classList.add("hidden");
        document.body.removeEventListener('click', menuClose);
        document.body.addEventListener('click', menuOpen);
    }
}

