import $ from 'jquery';
import 'slick-carousel';
import 'lightbox2';
import headerSlider from './lib/header_slider';
import newsSlider from './lib/news_slider';
import headerMenuNavigation from './lib/header_nav_menu';
import seeMore from './lib/see_more';
import formValidationFooter from './lib/validationForm';
import initMap from './lib/google_map';

headerSlider();
newsSlider();
headerMenuNavigation();
seeMore();
formValidationFooter();
