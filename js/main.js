$(function() {
  
    $('.hamburger-menu-link').on('click', function(e) {
      e.preventDefault()
  
      $('.phone-menu').fadeIn(1000);
  
    });
  
    $('.close__link').on('click', function(e) {
      e.preventDefault()
  
      $('.phone-menu').fadeOut(1000);
  
    }); 
  
});


//состав
$(function() {
  
  $('.ingredients').on('click', function() {
    
    $('.composition').slideToggle(300);

  });

});

//аккордион manu
$(function() {

  $('.menu-acco__img').on('click', function(e) {
    e.preventDefault()
    
    var elem = $(e.target),
    item = elem.closest('.menu-acco__item'),
    content = item.find('.menu-acco__content'),
    items = item.siblings(),
    otherContent = items.find('.menu-acco__content');
    


    if(!item.hasClass('active')) {
      items.removeClass('active');
      item.addClass('active');

      otherContent.css({
        'width' : 0
      })

      content.css({
        'width' : '100%'
      })
    } else {
      item.removeClass('active')
      content.css({
        'width' : 0
      })
    }
    

  });

});

//аккордион team
$(function() {
  
    $('.team-acco__title').on('click', function(e) {
      e.preventDefault()
      
      var elem = $(e.target),
      item = elem.closest('.team-acco__item'),
      content = item.find('.team-acco__content'),
      items = item.siblings(),
      otherContent = items.find('.team-acco__content');
      
  
  
      if(!item.hasClass('active')) {
        items.removeClass('active');
        item.addClass('active');
  
        otherContent.css({
          'height' : 0
        })
  
        content.css({
          'height' : '100%'
        })
      } else {
        item.removeClass('active')
        content.css({
          'height' : 0
        })
      }
      
  
    });
  
  });


// Яндекс карта
$(function() {
  
  ymaps.ready(init);
  var myMap;
  
  function init(){ 
      myMap = new ymaps.Map("map", {
          center: [56.47, 84.96],
          zoom: 13,
          controls: ["zoomControl", "fullscreenControl"]
      }); 
  
      myMap.behaviors.disable('scrollZoom');
  
      var myPlacemark = new ymaps.Placemark([56.48137438584522,84.94776321585691], {}, {
        iconLayout: 'default#image',
        iconImageHref: '../img/icons/map-marker.svg',
        iconImageSize: [60, 60],
        iconImageOffset: [-3, -42]
      });
      myMap.geoObjects.add(myPlacemark);
  
      var myPlacemark = new ymaps.Placemark([56.47658534556167,84.98254444562761], {}, {
        iconLayout: 'default#image',
        iconImageHref: '../img/icons/map-marker.svg',
        iconImageSize: [60, 60],
        iconImageOffset: [-3, -42]
      });
      myMap.geoObjects.add(myPlacemark);
  };

});

// fancybox
$(function() {
  $('.reviews-launcher').fancybox();

  $('.close__link').on('click', function(e) {
    e.preventDefault()

    $.fancybox.close();
  });

});