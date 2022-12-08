
var swiper = new Swiper('.blog-slider', {
      spaceBetween: 30,
      effect: 'fade',
      loop: true,
      mousewheel: {
        invert: false,
      },
      // autoHeight: true,
      pagination: {
        el: '.blog-slider__pagination',
        clickable: true,
      }
    });

$('.slider').slick({
  slidesToShow: 3,
  slidesToScroll: 1,               
  dots: false,
  arrows:false,
  infinite: true, 
  
  arrows:true,
  nextArrow: '.project__next',
  prevArrow: '.project__prev',
});
