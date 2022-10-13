import $ from "jquery";
import 'slick-carousel';
import { Fancybox } from "@fancyapps/ui";

$('.bgSlider').slick({
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  dots: true,
  autoplay: true,
  autoplaySpeed: 3000,
  pauseOnHover: false,
});

$('.newsSlider').slick({
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  arrows: true,
  dots: true,
  autoplay: false,
});

Fancybox.bind('[data-fancybox="gallery"]', {
  // Your options go here
});

const hiddenSlides = document.querySelectorAll(".hiddable");
const galleryButton = document.querySelector(".galleryButton");

galleryButton.addEventListener("click", openSlides);

function openSlides(event) {
  event.preventDefault();
  if (galleryButton.innerHTML === "see more") {
    galleryButton.innerHTML = "see less";
  } else { galleryButton.innerHTML = "see more" };
  for (let i = 0; i < hiddenSlides.length; i++) {
    hiddenSlides[i].classList.toggle("hiddable");
  }
}

let map;

function initMap() {
  const map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 50.450076, lng: 30.524121 },
    zoom: 15,
    mapTypeId: 'terrain',
  });

  const locations = [
    {
      position: { lat: 50.450076, lng: 30.524121 },
      map,
      title: "Майдан Незалежності",
    },
    {
      position: { lat: 50.448674, lng: 30.513261 },
      map,
      title: "Золоті ворота",
    }
  ];

  locations.forEach(function (element) {
    new google.maps.Marker(element);
  });
}

window.Fancybox = Fancybox;
window.initMap = initMap;
