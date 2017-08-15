import 'slick-carousel';
import './components/main';


//top-slider
$('.slider-top').slick({
  dots: true,
  infinite: true,
  speed: 500,
  fade: true,
  cssEase: 'linear',
  lazyLoad: 'progressive'
});


