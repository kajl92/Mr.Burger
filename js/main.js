$(function () {

  $('.hamburger-menu-link').on('click', function (e) {
    e.preventDefault()

    $('.phone-menu').fadeIn(1000);

  });

  $('.close__link').on('click', function (e) {
    e.preventDefault()

    $('.phone-menu').fadeOut(1000);

  });

});


//состав
$(function () {

  $('.ingredients').on('click', function () {

    $('.composition').slideToggle(300);

  });

});

//аккордион team
$(function () {

  $('.team-acco__title').on('click', function (e) {
    e.preventDefault()

    var elem = $(e.target),
      item = elem.closest('.team-acco__item'),
      content = item.find('.team-acco__content'),
      items = item.siblings(),
      otherContent = items.find('.team-acco__content');



    if (!item.hasClass('active')) {
      items.removeClass('active');
      item.addClass('active');

      otherContent.css({
        'height': 0
      })

      content.css({
        'height': '100%'
      })
    } else {
      item.removeClass('active')
      content.css({
        'height': 0
      })
    }


  });

});

// Яндекс карта
$(function () {

  ymaps.ready(init);
  var myMap;

  function init() {
    myMap = new ymaps.Map("map", {
      center: [56.47, 84.96],
      zoom: 13,
      controls: ["zoomControl", "fullscreenControl"]
    });

    myMap.behaviors.disable('scrollZoom');

    var myPlacemark = new ymaps.Placemark([56.48137438584522, 84.94776321585691], {}, {
      iconLayout: 'default#image',
      iconImageHref: '../img/icons/map-marker.svg',
      iconImageSize: [60, 60],
      iconImageOffset: [-3, -42]
    });
    myMap.geoObjects.add(myPlacemark);

    var myPlacemark = new ymaps.Placemark([56.47658534556167, 84.98254444562761], {}, {
      iconLayout: 'default#image',
      iconImageHref: '../img/icons/map-marker.svg',
      iconImageSize: [60, 60],
      iconImageOffset: [-3, -42]
    });
    myMap.geoObjects.add(myPlacemark);
  };

});

//onepage
$(function () {
  var sections = $('.section'),
    display = $('.maincontent'),
    inScroll = false;

    var md = new MobileDetect(window.navigator.userAgent),
    isMobile = md.mobile();    

  var performTransition = function (sectionEq) {

    if (inScroll) return

    inScroll = true;

    var position = (sectionEq * -100) + '%';

    display.css({
      'transform': 'translateY(' + position + ')',
      '-webkit-transform': 'translateY(' + position + ')'
    })

    sections.eq(sectionEq).addClass('active')
      .siblings().removeClass('active');

    setTimeout(function () {
      inScroll = false;
      $('.fixed-menu__item').eq(sectionEq).addClass('active')
        .siblings().removeClass('active');
    }, 1300);
  }

  var defineSections = function (sections) {
    var activeSection = sections.filter('.active');
    return {
      activeSection: activeSection,
      nextSection: activeSection.next(),
      prevSection: activeSection.prev()
    }
  }
  
  var scrollToSection = function (direction) {
    var section = defineSections(sections);

    if (direction == 'up' && section.nextSection.length) { //скроллим вверх
      performTransition(section.nextSection.index());
    }

    if (direction == 'down' && section.prevSection.length) { //скроллим вниз
      performTransition(section.prevSection.index());
    }
  }

$('.wrapper').on({
  wheel: function (e) {
    var deltaY = e.originalEvent.deltaY;
    var direction = deltaY > 0
    ? 'up'
    : 'down';

    scrollToSection(direction)
  },

  touchmove: function (e) {
    e.preventDefault();
  }
});


$(document).on('keydown', function (e) {
  var section = defineSections(sections);

  switch (e.keyCode) {
    case 40: //вверх
      if (section.nextSection.length) {
        performTransition(section.nextSection.index());
      }
      break;
    case 38: //вниз
      if (section.prevSection.length) {
        performTransition(section.prevSection.index());
      }
      break;

  }
});

$('[data-scroll-to]').on('click', function (e) {
  e.preventDefault()

  var elem = $(e.target);
  var sectionNum = parseInt(elem.attr('data-scroll-to'));

  performTransition(sectionNum);
});

if (isMobile) {
  $(window).swipe({
    swipe: function (event, direction, distance, duration, fingerCount, fingerData) {
      scrollToSection(direction);
    }
  });
}

});

// fancybox
$(function () {
  $('.reviews-launcher').fancybox();

  $('.close__link').on('click', function (e) {
    e.preventDefault()

    $.fancybox.close();
  });

});