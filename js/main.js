$( document ).ready(function() {
    $('#phone').mask('+38 (096) 777 77 77');
    $('.about-us__slider').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: false,
        dots: false
    });
});