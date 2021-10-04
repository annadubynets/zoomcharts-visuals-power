if ($('.company .owl-carousel').length > 0) {
    $('.company .owl-carousel').owlCarousel({
        loop: true,
        margin: 30,
        responsiveClass: true,
        autoplay: false,
        dots: false,
        responsive: {
            0: {
                items: 4,
                nav: false
            },
            1200: {
                items: 6,
                nav: true,
                loop: false,
            }
        }
    })
}

if ($('.testimonials .owl-carousel').length > 0) {
    $('.testimonials .owl-carousel').owlCarousel({
        loop: true,
        margin: 30,
        responsiveClass: true,
        autoplay: false,
        dots: false,
        nav: false,
        responsive: {
            0: {
                items: 1,
                stagePadding: 60,
            },
            1200: {
                items: 2,
                stagePadding: 300,
                loop: false,
            }
        }
    })
}