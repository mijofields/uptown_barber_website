'use strict';

document.addEventListener('DOMContentLoaded', function() {
    console.log('Welcome to Uptown Barbershop!');
});

$(document).ready(function() {

    // Check for click events on the navbar burger icon
    $(".navbar-burger").click(function() {

        // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
        $(".navbar-burger").toggleClass("is-active");
        $(".navbar-menu").toggleClass("is-active");

    });
});

$(document).ready(function() {

    $(".carousel").slick({
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000
    });

    $(".carousel").on('click', function() {


        $(".carousel").slick('slickPlay');

    });


});