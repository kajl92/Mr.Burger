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
      iconImageHref: './img/icons/map-marker.svg',
      iconImageSize: [60, 60],
      iconImageOffset: [-3, -42]
    });
    myMap.geoObjects.add(myPlacemark);

    var myPlacemark = new ymaps.Placemark([56.47658534556167,84.98254444562761], {}, {
      iconLayout: 'default#image',
      iconImageHref: './img/icons/map-marker.svg',
      iconImageSize: [60, 60],
      iconImageOffset: [-3, -42]
    });
    myMap.geoObjects.add(myPlacemark);
};