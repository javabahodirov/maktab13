(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();
    
    
    // Initiate the wowjs
    new WOW().init();


    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.sticky-top').addClass('shadow-sm').css('top', '0px');
        } else {
            $('.sticky-top').removeClass('shadow-sm').css('top', '-100px');
        }
    });
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


    // Facts counter
    $('[data-toggle="counter-up"]').counterUp({
        delay: 10,
        time: 2000
    });


    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 2000,
        items: 1,
        dots: false,
        loop: true,
        nav: true,
        navText : [
            '<i class="bi bi-chevron-left"></i>',
            '<i class="bi bi-chevron-right"></i>'
        ]
    });
    
    
})(jQuery);

const d = new Date();
let month = 'yanvar';

switch(d.getMonth()){
    case 0: month = 'yanvar'; break;
    case 1: month = 'fevral'; break;
    case 2: month = 'mart'; break;
    case 3: month = 'aprel'; break;
    case 4: month = 'may'; break;
    case 5: month = 'iyun'; break;
    case 6: month = 'iyul'; break;
    case 7: month = 'avgust'; break;
    case 8: month = 'sentyabr'; break;
    case 9: month = 'oktyabr'; break;
    case 10: month = 'noyabr'; break;
    case 11: month = 'dekabr'; break;
}

document.getElementById("dateIndicator").innerHTML = d.getDate() +"-"+ month + ", " + d.getFullYear() + "-yil";
