import $, { event } from "jquery";
import 'slick-carousel';
import { Fancybox } from "@fancyapps/ui";
import L from "leaflet";

const logo = document.querySelector(".logo");
const upButton = document.querySelector(".upButton");
const topBar = document.querySelector(".header__topBar");
const nextButton = document.querySelector(".scrollButton");

const aboutUs = document.querySelector(".whatWeDo");
const news = document.querySelector(".latestNews");
const projects = document.querySelector(".gallery");
const contact = document.querySelector(".footer");

const sections = [aboutUs, news, projects, contact];
const links = document.querySelectorAll(".navigation__link");

const hiddenSlides = document.querySelectorAll(".hiddable");
const hiddenSlidesMd = document.querySelectorAll(".hiddableMd");
const galleryButton = document.querySelector(".galleryButton");

const formName = document.querySelector(".footerForm__name");
const formEmail = document.querySelector(".footerForm__email");
const formSubmit = document.querySelector(".footerForm__submit");

const burger = document.querySelector(".burger");
const mobileMenu = document.querySelector(".responsiveTopbar__menu");

function scrollTo(coordinate, time = 500) {
  $('html, body').animate({
    scrollTop: coordinate,
  }, time);
}

function nextButtonBehavior(event) {
  event.preventDefault;
  scrollTo(aboutUs.offsetTop);
}

nextButton.addEventListener('click', nextButtonBehavior);

function upButtonBehavior(event) {
  event.preventDefault;
  scrollTo(0);
}

upButton.addEventListener('click', upButtonBehavior);
logo.addEventListener("click", upButtonBehavior);

function navLinksBehavior() {
  for (let i = 0; i < links.length; i++) {
    links[i].addEventListener('click', function (event) {
      event.preventDefault();
      scrollTo(sections[i].offsetTop);
    })
  }
}

navLinksBehavior();

function displayUpButton(scrollFromTop = 500) {
  if (window.scrollY > scrollFromTop) {
    upButton.classList.remove("hidden");
  }
  if (window.scrollY <= scrollFromTop) {
    upButton.classList.add("hidden");
  }
}

function navBarBehavior() {
  const marginTop = {
    zero: "margin-top: 0; ",
    fifty: 'margin-top: 50px; ',
  };
  const transition = "transition: margin-top 0.04s linear; "
  const background = "background: linear-gradient(243.43deg, #7E5AFF 16.9%, #55B7FF 83.27%); "

  if ((window.scrollY >= 50)) {
    topBar.style = marginTop.zero + transition;
  }

  if (topBar.getBoundingClientRect().bottom >= aboutUs.getBoundingClientRect().top) {
    topBar.style = marginTop.zero + transition + background;
  }

  if (topBar.getBoundingClientRect().bottom < aboutUs.getBoundingClientRect().top) {
    topBar.style = marginTop.zero + transition;
  }

  if (window.scrollY < 50) {
    topBar.style = marginTop.fifty + transition;
  }
}

function navDotsBehavior() {
  sections.forEach(function (section, index) {
    if ((topBar.getBoundingClientRect().bottom > section.getBoundingClientRect().top) && (topBar.getBoundingClientRect().bottom < section.getBoundingClientRect().bottom)) {
      links[index].classList.add("navigation__link_inside");
    } else {
      links[index].classList.remove("navigation__link_inside");
    }
  });
}

document.addEventListener("scroll", (event) => {
  displayUpButton();
  navBarBehavior();
  navDotsBehavior();
})

$('.bgSlider').slick({
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  dots: true,
  autoplay: true,
  autoplaySpeed: 3000,
  pauseOnHover: false,
  responsive: [
    {
      breakpoint: 481,
      settings: {
        dots: false,
      }
    },
  ]
});

$('.newsSlider').slick({
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  arrows: true,
  dots: true,
  autoplay: false,
  responsive: [
    {
      breakpoint: 993,
      settings: {
        slidesToShow: 2,
      }
    },
    {
      breakpoint: 769,
      settings: {
        slidesToShow: 1,
      }
    },
  ]
});

Fancybox.bind('[data-fancybox="gallery"]', {});

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

L.marker([40.68, -73.897], { icon: customIcon }).addTo(map);

function validateName() {
  return !!formName.value;
}

function validateEmail() {
  const emailRegex = new RegExp(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
  return emailRegex.test(formEmail.value);
}

function formValidation(event) {
  const redUnderline = "border-bottom: 1px solid rgba(238, 114, 123, 1)";
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

document.body.addEventListener("click", openMenu);

function openMenu(event) {
  if (event.target.closest(".burger") !== null) {
    mobileMenu.classList.remove("responsiveTopbar__menu_hidden");
    document.body.removeEventListener("click", openMenu);
    document.body.addEventListener("click", closeMenu);
  }
}

function closeMenu(event) {
  if ((event.target.closest(".responsiveTopbar__menu") === null) || (isLink(event.target))) {
    mobileMenu.classList.add("responsiveTopbar__menu_hidden");
    document.body.removeEventListener("click", closeMenu);
    document.body.addEventListener("click", openMenu);
  }
}

function isLink(element) {
  let answer = false;
  links.forEach(function (link) {
    if (link === element) {
      answer = true;
    }
  });
  return answer;
}

window.Fancybox = Fancybox;
window.initMap = initMap;
