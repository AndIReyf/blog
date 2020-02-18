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

  // -----------------------------------------------------------------Small spoiler 

  document.getElementById('Container').addEventListener('click', e => {
    if (e.target.classList.contains('main-box__info-detail')) {
      e.target.previousElementSibling.classList.toggle('active');
    }
  })

  // -----------------------------------------------------------------Header menu spoiler
  
  const subList = document.querySelectorAll('.sub-list');
  const li = document.querySelectorAll('.list li');
  const body = document.querySelector('body');

  li.forEach(li => {
    li.addEventListener('click', function () {
      subList.forEach(list => {
        list.classList.remove('active');
      })
      this.classList.add('active');
      this.children[1].classList.add('active');
    })
  })

  body.addEventListener('click', e => {
    if (!e.target.classList.contains('list__link')) {
      subList.forEach(list => {
        list.classList.remove('active');
      })
    }
  })
});