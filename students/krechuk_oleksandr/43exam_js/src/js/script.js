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
    } else {
        headerNav.classList.remove('hide2');
    };
}

const menuWrap = document.querySelector('.menu__wrapper');
const navMenu = menuWrap.closest("nav");

function menuBg() {
    if (navMenu.classList.contains('menu-adaptive')) {
        headerMenu.classList.add('hide3');
    }
    else {
        headerMenu.classList.remove('hide3');
    }

}

menuBg();
headerScroll();
window.addEventListener("scroll", headerScroll);
window.addEventListener("click", menuBg);


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

const formName = document.getElementById("formName");
const formEmail = document.getElementById("formEmail");
const formSubmit = document.getElementById("formSubmit");

const requiredMessage = "This field is required";
const invalidEmail = 'An incorrect email address';

formSubmit.addEventListener('click', (e) => {
    e.preventDefault();
    checkInputs();
})

function checkInputs() {
    const formNameValue = formName.value.trim();
    const formEmailValue = formEmail.value.trim();

    if (formNameValue === '') {
        setErrorFor(formName, requiredMessage)
    } else {
        setSuccessFor(formName)
    }

    if (formEmailValue === '') {
        setErrorFor(formEmail, requiredMessage)
    } else if (!isEmail(formEmailValue)) {
        setErrorFor(formEmail, invalidEmail)
    } else {
        setSuccessFor(formEmail)
    }
}


function setErrorFor(iput, message) {
    const formItem = iput.parentElement;
    const span = formItem.querySelector('span');
    span.innerText = message;
    formItem.classList.add('error')
}

function setSuccessFor(iput) {
    const formItem = iput.parentElement;
    formItem.classList.remove('error')
}

const regEx = new RegExp("([!#-'*+/-9=?A-Z^-~-]+(\.[!#-'*+/-9=?A-Z^-~-]+)*|\"\(\[\]!#-[^-~ \t]|(\\[\t -~]))+\")@([!#-'*+/-9=?A-Z^-~-]+(\.[!#-'*+/-9=?A-Z^-~-]+)*|\[[\t -Z^-~]*])");

function isEmail(email) {
    return regEx.test(email);
}
