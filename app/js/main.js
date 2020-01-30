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

  // -----------------------------------------------------------------Tabs
  
  const tabs = document.querySelectorAll('[data-tab-target]')
  const tabContents = document.querySelectorAll('[data-tab-content]')

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const target = document.querySelector(tab.dataset.tabTarget)
      tabContents.forEach(tabContent => {
        tabContent.classList.remove('active')
      })
      tabs.forEach(tab => {
        tab.classList.remove('active')
      })
      tab.classList.add('active')
      target.classList.add('active')
    })
  })

  // -----------------------------------------------------------------Spoiler

  $('.widget-spoiler__title').click(function (event) {

    if ($('.widget-spoiler').hasClass('one')) {
      $('.widget-spoiler__title').not($(this)).removeClass('active');
      $('.widget-spoiler__list').not($(this).next()).slideUp(300);
    }
    $(this).toggleClass('active').next().slideToggle(300);
  });

  // -----------------------------------------------------------------MixItUp
  
  if ($('#Container').length) {
    var mixer = mixitup('#Container');
  } else {}

  // -----------------------------------------------------------------Popup 

  $('.popup-with-form').magnificPopup({
    type: 'inline',
    preloader: false,
    focus: '#name',

    // When elemened is focused, some mobile browsers in some cases zoom in
    // It looks not nice, so we disable it:
    callbacks: {
      beforeOpen: function () {
        if ($(window).width() < 700) {
          this.st.focus = false;
        } else {
          this.st.focus = '#name';
        }
      }
    }
  });

});