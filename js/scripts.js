if ($('.company .owl-carousel').length > 0) {
    $('.company .owl-carousel').owlCarousel({
        loop: true,
        margin: 30,
        responsiveClass: true,
        autoplay: true,
        dots: false,
        responsive: {
            0: {
                items: 2,
                stagePadding: 60,
                nav: false
            },
            768: {
                items: 4,
                stagePadding: 60,
                nav: false
            },
            1200: {
                items: 6,
                nav: true
            }
        }
    })
}

if ($('.testimonials .owl-carousel').length > 0) {
    $('.testimonials .owl-carousel').owlCarousel({
        loop: true,
        margin: 30,
        responsiveClass: true,
        autoplay: true,
        dots: false,
        nav: false,
        responsive: {
            0: {
                items: 1,
                stagePadding: 60,
            },
            1200: {
                items: 2,
                stagePadding: 300
            }
        }
    })
}

$(document).ready(function() {
    $(window).scroll(function() {
        if ($(this).scrollTop() > 50) {
            $('.go-to-bottom').fadeIn();
        } else {
            $('.go-to-bottom').fadeOut();
        }
    });
    // scroll body to 0px on click
    $('.go-to-bottom').click(function() {
        $('body,html').animate({
            scrollTop: 0
        }, 400);
        return false;
    });
});