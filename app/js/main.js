$(function () {

  new WOW().init();

  $('.header__burger').click(function () {
    $('.header__burger, .header__menu').toggleClass('active');
    $('html, body').toggleClass('lock');
  });

  $('input, select').styler();

});