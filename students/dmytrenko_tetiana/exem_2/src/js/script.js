import $ from 'jquery';
import 'slick-carousel';
import Swiper, { Navigation, Pagination } from 'swiper';
import { Fancybox } from "@fancyapps/ui";
"use strict"

// swipper
const swiper = new Swiper('.swiper', {
    modules: [Navigation, Pagination],
    // Optional parameters
    loop: true,

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    autoHeight: true,
    slidesPerView: 3,
    spaceBetween: 30,
    speed: 1000,
    breakpoints: {
        200: {
            slidesPerView: 1,
        },
        576: {
            slidesPerView: 2,
        },
        768: {
            slidesPerView: 3,
        }
    }
});

// type of screen

const isMobile = {
    Android: function () {
        return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function () {
        return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function () {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function () {
        return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function () {
        return navigator.userAgent.match(/IEMobile/i);
    },
    any: function () {
        return (
            isMobile.Android() ||
            isMobile.BlackBerry() ||
            isMobile.iOS() ||
            isMobile.Opera() ||
            isMobile.Windows());
    }
};

if (isMobile.any()) {
    document.body.classList.add('_touch');

    let menuArrows = document.querySelectorAll('.menu__arrow');
    if (menuArrows.length > 0) {
        for (let index = 0; index < menuArrows.length; index++) {
            const menuArrow = menuArrows[index];
            menuArrow.addEventListener("click", function (e) {
                menuArrow.parentElement.classList.toggle('_active');
            });
        }
    }

} else {
    document.body.classList.add('_pc');
}

// menu burger
const iconMenu = document.querySelector('.menu__icon');
const menuBody = document.querySelector('.menu__body');
if (iconMenu) {
    iconMenu.addEventListener("click", function (e) {
        document.body.classList.toggle('_lock');
        iconMenu.classList.toggle('_active');
        menuBody.classList.toggle('_active');
    });
}


// scroll on click menu link

const menuLinks = document.querySelectorAll('.menu__link[data-goto]');
if (menuLinks.length > 0) {
    menuLinks.forEach(menuLink => {
        menuLink.addEventListener("click", onMenuLinkClick);
    });

    function onMenuLinkClick(e) {
        const menuLink = e.target;
        if (menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)) {
            const gotoBlock = document.querySelector(menuLink.dataset.goto);
            const gotoBlockValue = gotoBlock.getBoundingClientRect().top + scrollY - document.querySelector('header').offsetHeight;

            if (iconMenu.classList.contains('_active')) {
                document.body.classList.remove('_lock');
                iconMenu.classList.remove('_active');
                menuBody.classList.remove('_active');
            }

            window.scrollTo({
                top: gotoBlockValue,
                behavior: "smooth"
            });
            e.preventDefault();
        }
    }
}

// scroll on click button

const nextButton = document.querySelector(".scrollButton");
const aboutUs = document.querySelector(".whatWeDo");

function scrollTo(coordinate, time = 700) {
    $('html, body').animate({
        scrollTop: coordinate,
    }, time);
}

function nextButtonBehavior(event) {
    event.preventDefault;
    scrollTo(aboutUs.getBoundingClientRect().top + scrollY - document.querySelector('header').offsetHeight);
}

nextButton.addEventListener('click', nextButtonBehavior);

// button scrolltop

const buttonScrollTop = $('.upButton');
const header = $('.header');
const headerContainer = $('.header__container');

let opacity = true;

$(window).on('scroll', function () {
    if ($(this).scrollTop() > 100 && opacity) {
        buttonScrollTop.css({
            opacity: 1,
        });
        opacity = false;
        header.css({
            "background-image": 'linear-gradient(243.43deg, #7E5AFF 16.9%, #55B7FF 83.27%)',
        });
        headerContainer.css({
            "margin-top": 0,
        });
        opacity = false;
    } else if ($(this).scrollTop() < 100 && !opacity) {
        buttonScrollTop.css({
            opacity: 0,
        });
        opacity = true;
        header.css({
            "background-image": "unset",
        });
        if (document.body.classList.contains('_pc')) {
            headerContainer.css({
                "margin-top": "45px",
            });
        };
    };
    navDotsBehavior();
});

$('.upButton').on('click', function (e) {
    $('html, body').animate({
        scrollTop: 0
    }, 600, function () {
        console.log(this);
    })

});

// slick slider

$('.slider').slick({
    arrows: false,
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 1000,
    swipe: true,
    touchThreshold: 20,
});

// fancybox

Fancybox.bind('[data-fancybox="gallery"]', {});

const hiddenSlides = document.querySelectorAll(".hiddable");
const hiddenSlidesMd = document.querySelectorAll(".hiddableMd");
const galleryButton = document.querySelector(".galleryButton");

function openSlides(event) {
    event.preventDefault();
    if (galleryButton.innerHTML === "see more") {
        galleryButton.innerHTML = "see less";
    } else { galleryButton.innerHTML = "see more" };

    for (let i = 0; i < hiddenSlides.length; i++) {
        hiddenSlides[i].classList.toggle("hiddable");
    }
    for (let i = 0; i < hiddenSlidesMd.length; i++) {
        hiddenSlidesMd[i].classList.toggle("hiddableMd");
    }
}

galleryButton.addEventListener("click", openSlides);

// map

function initMap() {

    const center = {
        lat: 40.67560680212675,
        lng: -73.91454318221241
    }

    const map = new google.maps.Map(document.getElementById("map"), {
        center,
        zoom: 12,
    });
    const image = "https://imagizer.imageshack.com/img924/5844/rECX12.png";
    const marker = new google.maps.Marker({
        position: center,
        map: map,
        title: 'Hilltop',
        icon: image,
    });
    const contentString =
        '<div id="content">' +
        '<div id="siteNotice">' +
        "</div>" +
        '<h1 id="firstHeading" class="firstHeading">Uluru</h1>' +
        '<div id="bodyContent">' +
        "<p><b>Uluru</b>, also referred to as <b>Ayers Rock</b>, is a large " +
        "sandstone rock formation in the southern part of the " +
        "Northern Territory, central Australia. It lies 335&#160;km (208&#160;mi) " +
        "south west of the nearest large town, Alice Springs; 450&#160;km " +
        "(280&#160;mi) by road. Kata Tjuta and Uluru are the two major " +
        "features of the Uluru - Kata Tjuta National Park. Uluru is " +
        "sacred to the Pitjantjatjara and Yankunytjatjara, the " +
        "Aboriginal people of the area. It has many springs, waterholes, " +
        "rock caves and ancient paintings. Uluru is listed as a World " +
        "Heritage Site.</p>" +
        '<p>Attribution: Uluru, <a href="https://en.wikipedia.org/w/index.php?title=Uluru&oldid=297882194">' +
        "https://en.wikipedia.org/w/index.php?title=Uluru</a> " +
        "(last visited June 22, 2009).</p>" +
        "</div>" +
        "</div>";
    const infowindow = new google.maps.InfoWindow({
        content: contentString,
        ariaLabel: "Uluru",
    });
    marker.addListener("click", () => {
        infowindow.open({
            anchor: marker,
            map,
        });
    });
}

window.initMap = initMap;

// form validate

const userContactForm = document.querySelector('.user-contact-form');

userContactForm.addEventListener('submit', function (e) {
    e.preventDefault();

    const formElement = this.querySelectorAll('input');

    validateElementForm(formElement);
});

/*-----------*/

function clearErrorMessage(formElement) {
    formElement.forEach(function (element) {
        const errorMessageElement = element.parentElement.querySelector('.error');
        if (errorMessageElement) {
            errorMessageElement.remove();
        }
    });
}

/*-----------*/

function validateEmail(element) {
    const pattern = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return pattern.test(element.value);
}

/*-----------*/

function validateElementForm(formElement) {
    if (!formElement) return false;

    let isValid = true;

    clearErrorMessage(formElement);

    formElement.forEach(function (element) {

        if (element.classList.contains('_req') && !element.value) {
            showErrorMessage(element);
            isValid = false;
        }
        if (element.classList.contains('_req-email') && !validateEmail(element)) {
            showErrorMessage(element);
            isValid = false;
        }
    });

    return isValid;
}

/*-----------*/

function showErrorMessage(element) {
    if (!element) return;

    const message = element.dataset.errorMessage;
    const divMessage = document.createElement('div');
    divMessage.classList.add('error');
    divMessage.textContent = message;

    element.parentElement.append(divMessage);
}


// -----------

const topBar = document.querySelector(".header");
const about = document.querySelector(".aboutUs");
const projects = document.querySelector(".whatWeDo");
const news = document.querySelector(".news-section");
const gallery = document.querySelector(".gallery");
const contact = document.querySelector(".footer");
const sections = [about, projects, news, gallery, contact];
const links = document.querySelectorAll(".menu__item");

const height = scrollY - document.querySelector('header').offsetHeight;

function navDotsBehavior() {
    sections.forEach(function (section, index) {
        if ((topBar.getBoundingClientRect().bottom > section.getBoundingClientRect().top) && (topBar.getBoundingClientRect().bottom < section.getBoundingClientRect().bottom)) {
            links[index].classList.add("navigation__link_inside");
        } else {
            links[index].classList.remove("navigation__link_inside");
        }
    });
}
