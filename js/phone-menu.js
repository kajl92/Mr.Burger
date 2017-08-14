$(document).ready(function() {

  $('.hamburger-menu-link').on('click', function(e) {
    e.preventDefault()

    $('.phone-menu').fadeIn(1000);

  });

  $('.cross__link').on('click', function(e) {
    e.preventDefault()

    $('.phone-menu').fadeOut(1000);

  }); 

});