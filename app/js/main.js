$(function () {

  new WOW().init();

  $('.header-burger').click(function () {
    $('.header-burger, .header-menu').toggleClass('active');
    $('html, body').toggleClass('lock');
  });

  $('input, select').styler();

});