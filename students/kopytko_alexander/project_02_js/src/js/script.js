import $, {event} from "jquery";
import Swiper, {Navigation, Pagination, Autoplay} from "swiper";
import {Fancybox} from "@fancyapps/ui";
import L from "leaflet";
import JustValidate from 'just-validate';
import {left} from "core-js/internals/array-reduce";


const offsetCorrector = 105 + 84;
const header = $('.header');
const logo = $('.header__logo');
const menu = $('.nav__menu');
const mobileMenu = $('.mobile-menu__link')
const hero = $('.hero');
const projects = $('.projects');
const news = $('.news');
const gallery = $('.gallery');
const map_elem = $('.map');
const footer = $('.footer');

const scrollDown = $('.scrollDown');

const sections = [projects, news, gallery, map_elem]
const navList = $('.menu__link');

function scrollTo(offset) {
    $("html, body").animate({scrollTop: offset - offsetCorrector + 1});
}

mobileMenu.click(function (event) {
    event.preventDefault();
    menu.toggleClass('mobile-menu-opened');
    header.toggleClass('mobile-menu-opened');
})

navList.each(function () {
    $(this).click(function (event) {
        if (menu.hasClass('mobile-menu-opened')) {
            menu.toggleClass('mobile-menu-opened');
            header.toggleClass('mobile-menu-opened');
        }
    })
});

logo.click(function (event) {
    event.preventDefault();
    scrollTo(0);
});

scrollDown.click(function (event) {
    event.preventDefault();
    const offset = getOffsetCorrectorByMedia()
    scrollTo(projects.offset().top + (offset ? offset : 30));
});

function getOffsetCorrectorByMedia() {
    if ($(window).width() <= 576) {
        return 80;
    }
    if ($(window).width() <= 768) {
        return 50;
    }
    return 30;
}

for (let i = 0; i < navList.length; i++) {
    const offsetCorrectorList = [0, 105, 0, 425]

    $(navList[i]).click(function (event) {
        event.preventDefault();
        scrollTo(sections[i].offset().top + offsetCorrectorList[i] + getOffsetCorrectorByMedia());
    })
}

$(window).scroll(function () {
    const windowOffset = $(window).scrollTop();
    if (windowOffset > 20) {
        header.addClass('sticky');
    } else {
        header.removeClass('sticky');
    }
    if (windowOffset > projects.offset().top - offsetCorrector) {
        header.addClass('sticky-bg');
    } else {
        header.removeClass('sticky-bg');
    }

    let current = "";
    sections.forEach((section) => {
        const sectionTop = section.offset().top;
        if (windowOffset >= sectionTop - offsetCorrector) {
            current = section.attr("id");
        }
    });
    navList.each(function () {
        const li = $(this);
        if (!li.hasClass(current) && li.hasClass("active")) {
            li.removeClass("active");
        }
        if (li.hasClass(current) && !li.hasClass("active")) {
            li.addClass("active");
        }
    });
});


const galleryItems = $('.gallery__item');
const showMoreBtn = $('.btn-more');

if (galleryItems.length > 5) {
    galleryItems.slice(5).toggleClass('gallery__hidden');
}

showMoreBtn.click(function (event) {
    event.preventDefault();
    galleryItems.slice(5).toggleClass('gallery__hidden');
    $(this).text() === 'SEE MORE' ? $(this).text('SEE LESS') : $(this).text('SEE MORE');
});


const swiperHero = new Swiper('.hero__swiper', {
    modules: [Pagination, Autoplay],
    loop: true,
    autoplay: {
        delay: 4000,
        disableOnInteraction: false,
    },
    pagination: {
        el: '.swiper-pagination',
        horizontalClass: 'swiper-pagination-vertical',
        clickable: true,
    },
});

const swiperNews = new Swiper('.news__swiper', {
    modules: [Pagination, Navigation],
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    breakpoints: {
        577: {
            slidesPerView: 2,
            spaceBetween: 30,
        },
        769: {
            slidesPerView: 3,
            spaceBetween: 30,
        }
    },
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
    pagination: {
        el: '.swiper-pagination-news',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});

const mapOptions = {
    zoomControl: true,
    scrollWheelZoom: false,
};

const map = L.map('map', mapOptions).setView([40.66, -73.89], 13);

L.tileLayer('https://tile.jawg.io/jawg-light/{z}/{x}/{y}{r}.png?access-token=1RSWcIKFGBx6iaqbkPud1enTVg16aOTk5NptER0YeAOAaYZQlu3KpKcOrUD4XqWl', {}).addTo(map);
map.attributionControl.addAttribution("<a href=\"https://www.jawg.io\" target=\"_blank\">&copy; Jawg</a> - <a href=\"https://www.openstreetmap.org\" target=\"_blank\">&copy; OpenStreetMap</a>&nbsp;contributors")

const customIcon = L.icon({
    iconUrl: './images/marker.svg',
    iconSize: [106, 106],
    iconAnchor: [54, 54],
});

L.marker([40.68, -73.897], {icon: customIcon}).addTo(map);

const validation = new JustValidate('#form', {lockForm: false});

validation
    .addField('#name', [
            {
                rule: 'minLength',
                value: 3,
            },
            {
                rule: 'maxLength',
                value: 30,
            },
            {
                rule: 'required',
                errorMessage: 'Please enter your name'
            }
        ],
        {
            errorsContainer: '.error-name'
        }
    )
    .addField('#email', [
            {
                rule: 'required',
                errorMessage: 'Email is required',
            },
            {
                rule: 'email',
                errorMessage: 'Email is invalid!',
            },
        ],
        {
            errorsContainer: '.error-email'
        }).onSuccess((event) => $('#form').submit());
