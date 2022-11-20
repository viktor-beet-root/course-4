import $, { each } from 'jquery';
import 'slick-carousel';
import { Fancybox } from "@fancyapps/ui";
import L from "leaflet";

$('.header__slider').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    dots: true,
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: false,
    rows: 0,
    responsive: [
        {
            breakpoint: 576,
            settings: {
                dots: false,
            }
        },
    ]
});

$('.latestNews__slider').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    dots: true,
    rows: 0,
    autoplay: true,
    autoplaySpeed: 4000,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 2,
            }
        },
        {
            breakpoint: 568,
            settings: {
                slidesToShow: 1,
            }
        },
    ]
});

//GALLARY

Fancybox.bind('[data-fancybox="gallery"]', {});
window.Fancybox = Fancybox;

//GALLARY BUTTON

const buttonSeeMore = document.querySelector(".gallary__button");
const galeryItemHiden = document.querySelectorAll(".hidden");

function openSlides(event) {
    event.preventDefault();
    if (buttonSeeMore.innerHTML === "see more") {
        buttonSeeMore.innerHTML = "see less";
    } else { buttonSeeMore.innerHTML = "see more" };

    for (let i = 0; i < galeryItemHiden.length; i++) {
        galeryItemHiden[i].classList.toggle("hidden");
    }
}

buttonSeeMore.addEventListener("click", openSlides);

//MAP


const mapOptions = {
    zoomControl: true,
    scrollWheelZoom: false,
};

const map = L.map('map', mapOptions).setView([40.66, -73.89], 13);

L.tileLayer('https://tile.thunderforest.com/atlas/{z}/{x}/{y}.png?apikey=c249793cfe414eb185594b90ac79c6a7', {
    maxZoom: 19,
    attribution: '&copy; <a href="https://www.thunderforest.com/">Thunderforest</a> | &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

const customIcon = L.icon({
    iconUrl: './images/svg-form/map-pin.svg',
    iconSize: [106, 106],
    iconAnchor: [81, 54],
});

L.marker([40.680570, -73.898024], { icon: customIcon }).addTo(map);

//HEADER

const headerNav = document.querySelector(".header__navigation");
const heighWindow = document.documentElement.clientHeight;
const heightHeader = headerNav.clientHeight;

const menuBtn = document.querySelector('.menu-btn');
const headerMenu = document.querySelector('.header__menu');

//MENU

function menuOn() {
    menuBtn.classList.toggle('_active');
    headerMenu.classList.toggle('menu-adaptive');
}

menuBtn.addEventListener('click', menuOn);

let scrollTop;

function headerScroll() {
    scrollTop = scrollY;
    if (scrollTop >= 53) {
        headerNav.classList.add('hide1');
    } else {
        headerNav.classList.remove('hide1');
    };
    if (scrollTop >= heighWindow - heightHeader) {
        headerNav.classList.add('hide2');
        headerMenu.classList.add('hide3');
    } else {
        headerNav.classList.remove('hide2');
        headerMenu.classList.remove('hide3');
    };
}

const menuWrap = document.querySelector('.menu__wrapper');
const navMenu = menuWrap.closest("nav");
const headerDiv = headerNav.closest("div");

function menuBg() {
    if (navMenu.classList.contains('menu-adaptive') && headerDiv.classList.contains('hide2')) {
        headerMenu.classList.add('hide3');
    }
    else {
        headerMenu.classList.remove('hide3');
    }

}

menuBg();
headerScroll();
window.addEventListener("scroll", headerScroll);


//ARROW

const topArrow = document.querySelector(".arrow__top");

function arrowUp() {
    scrollTop = scrollY;
    if (scrollTop <= heighWindow) {
        topArrow.classList.add('hide__arrow');
    } else {
        topArrow.classList.remove('hide__arrow');
    };
}
arrowUp();
window.addEventListener("scroll", arrowUp);

//NAV

const buttonDown = document.querySelector(".header__arrow-wrapper");

const logo = document.querySelectorAll(".logo");

const aboutUs = document.querySelector(".header");
const projects = document.querySelector(".whatWeDo");
const news = document.querySelector(".latestNews");
const contact = document.querySelector(".footer");
const menuLink = document.querySelectorAll('.menu__link');

const navId = [aboutUs, projects, news, contact]

function goTo(place, time = 100) {
    $('html, body').animate({
        scrollTop: place,
    }, time);
}

function nextBlock(event) {
    event.preventDefault;
    goTo(projects.offsetTop - heightHeader);
}

function goUp(event) {
    event.preventDefault;
    goTo(0);
}

function goToBlock() {
    for (let i = 0; i < navId.length; i++) {
        menuLink[i].addEventListener('click', function (event) {
            event.preventDefault();
            goTo(navId[i].offsetTop - heightHeader);
        })
    }
}

goToBlock();

topArrow.addEventListener('click', goUp);
buttonDown.addEventListener('click', nextBlock);
logo.forEach(element => element.addEventListener('click', goUp));

//MENU DOTS

const menuItem = document.querySelectorAll('.header__menu li');

function navDotsWhite() {
    let scroll = window.scrollY;
    navId.forEach((elem, i) => {
        if (elem.offsetTop - heightHeader <= scroll) {
            document.querySelectorAll('.header__menu a').forEach((elem) => {
                if (elem.classList.contains('menu__link-on')) {
                    elem.classList.remove('menu__link-on');
                }
            })
            menuItem[i].querySelector('a').classList.add('menu__link-on');
        }
    })
}

window.addEventListener("scroll", navDotsWhite);


//VALIDATION

const formName = document.querySelector(".form__name");
const formEmail = document.querySelector(".form__email");
const formSubmit = document.querySelector(".form__btn");

function validateName() {
    return !!formName;
}

function validateEmail() {
    const emailRegExp = new RegExp(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
    return emailRegExp.test(formEmail.value);
}

function formValidation(event) {
    const redUnderline = "border-bottom: 1px solid #FF0000";
    formName.style = " ";
    formEmail.style = " ";
    if (!validateName() || !validateEmail()) {
        event.preventDefault();
        if (!validateName()) {
            formName.style = redUnderline;
        };
        if (!validateEmail()) {
            formEmail.style = redUnderline;
        };
    }
}

formSubmit.addEventListener('click', formValidation)


//IMG HEIGHT

const weDoImg = document.querySelector('.whatWeDo__img');
let weDoImgHeight = weDoImg.clientHeight + 'px';
const weDoBefore = '.whatWeDo__before';
$(weDoBefore).css('height', weDoImgHeight);


//footer bottom

const footerEndHeight = $('.footer__end').outerHeight(true);
const footerInTouchHeignt = $('.footer__inTouch').outerHeight(true);
const footerBottom = '.footer__bottom';
const footerBottomPad = footerInTouchHeignt - 300 + footerEndHeight + 'px';
$(footerBottom).css('padding-top', footerBottomPad);
