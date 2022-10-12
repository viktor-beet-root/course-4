import $ from "jquery";
import 'slick-carousel';

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

let map;

function initMap() {
  const map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 50.450076, lng: 30.524121 },
    zoom: 10,
  });
}


window.initMap = initMap;
