$(function () {

  new WOW().init();

  $('.header-burger').click(function () {
    $('.header-burger, .header-menu').toggleClass('active');
    $('html, body').toggleClass('lock');
  });

  $('input, select').styler();

  $('.slider-main').slick({
    infinite: true,
    fade: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
    prevArrow: '<button type="button" class="slick-prev icon-keyboard_arrow_left"></button>',
    nextArrow: '<button type="button" class="slick-next icon-keyboard_arrow_right"></button>',
    responsive: [{
      breakpoint: 720,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        arrows: false
      }
    }]
  });

});