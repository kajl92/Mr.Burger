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

//menu-acco
$(function() {
  $('#fullpage').fullpage({
    //Navigation
		menu: '#menu',
		lockAnchors: false,
		anchors:['firstPage', 'secondPage'],
		navigation: false,
		navigationPosition: 'right',
		navigationTooltips: ['firstSlide', 'secondSlide'],
		showActiveTooltip: false,
		slidesNavigation: false,
		slidesNavPosition: 'bottom',
    
		//Scrolling
		css3: true,
		scrollingSpeed: 700,
		autoScrolling: true,
		fitToSection: true,
		fitToSectionDelay: 1000,
		scrollBar: true,
		easing: 'easeInOutCubic',
		easingcss3: 'ease',
		loopBottom: true,
		loopTop: true,
		loopHorizontal: true,
		continuousVertical: false,
		continuousHorizontal: false,
		scrollHorizontally: false,
		interlockedSlides: false,
		dragAndMove: false,
		offsetSections: false,
		resetSliders: false,
		fadingEffect: false,
		normalScrollElements: '#element1, .element2',
		scrollOverflow: false,
		scrollOverflowReset: false,
		scrollOverflowOptions: null,
		touchSensitivity: 15,
		normalScrollElementTouchThreshold: 5,
		bigSectionsDestination: null,
    
		//Accessibility
		keyboardScrolling: true,
		animateAnchor: true,
		recordHistory: true,
    
		//Design
		controlArrows: true,
		verticalCentered: true,
		sectionsColor : ['#ccc', '#fff'],
		paddingTop: '0',
		paddingBottom: '0',
		fixedElements: '',
		responsiveWidth: 0,
		responsiveHeight: 0,
		responsiveSlides: false,
		parallax: false,
		parallaxOptions: {type: 'reveal', percentage: 62, property: 'translate'},
    
		//Custom selectors
		sectionSelector: '.section',
		slideSelector: '.slide',
    
		lazyLoading: true,
    
		//events
		onLeave: function(index, nextIndex, direction){},
		afterLoad: function(anchorLink, index){},
		afterRender: function(){},
		afterResize: function(){},
		afterResponsive: function(isResponsive){},
		afterSlideLoad: function(anchorLink, index, slideAnchor, slideIndex){},
		onSlideLeave: function(anchorLink, index, slideIndex, direction, nextSlideIndex){}
  });
  
  $('#fullpage').fullpage({
    anchors: ['firstPage', 'secondPage', 'thirdPage', 'fourthPage', 'fivePage', 'sixPage', 'sevenPage', 'eightPage'],
    menu: '#myMenu'
  });
});

// fancybox
$(function () {
  $('.reviews-launcher').fancybox();

  $('.close__link').on('click', function (e) {
    e.preventDefault()

    $.fancybox.close();
  });

});