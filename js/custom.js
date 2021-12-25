$(document).ready(function() {

    /* Loader
    ====================*/
    $(window).load(function() {
        $('#status').fadeOut();
        $('#preloader').delay(350).fadeOut('slow');
        $('body').delay(350).css({
            'overflow': 'visible'
        });
    });

    /* Particles js
    ====================*/
    particlesJS.load('particles-js', 'js/particles.json', function() {

    });

    /* Navbar
    ====================*/
    $(".nav-link").click(function() {
        if ($(this.hash).height() > $(window).height()) {
            $('html,body').animate({
                scrollTop: $(this.hash).offset().top - 25
            }, 1000);
        } else {
            $('html,body').animate({
                scrollTop: $(this.hash).offset().top - (($(window).height() - $(this.hash).innerHeight()) / 2)
            }, 1000);
        }
        return false;
    });

    $(window).scroll(function() {
        if ($(document).scrollTop() > 600) {
            $(".fixed-top").css("background-color", "#0fa5a7");
            $(".navbar-collapse ul li a").css("color", "#fff");
        } else {
            $(".fixed-top").css("background-color", "transparent");
            $(".navbar-collapse ul li a").css("color", "#fff");
        }
    });

    /* Circle Progress
    ====================*/
    function sirkl(el) {
        $(el).circleProgress({
                fill: {
                    color: '#ffce8e'
                }
            })
            .on('circle-animation-progress', function(event, progress, stepValue) {
                $(this).find('strong').text(String(stepValue.toFixed(2)).substr(2) + '%');
            });
    };
    sirkl('.circle-progress');

    /* Counter-Up
    ====================*/
    $('.counter').counterUp({
        delay: 10,
        time: 1500
    });

    /* owl carousel Testimonials
    ====================*/
    $(".owl-carousel-testimonials, .owl-carousel-testimonials2").owlCarousel({
        loop: true,
        margin: 10,
        nav: false,
        items: 1,
        autoplay: true,
        autoplayTimeout: 7000,
        autoplayHoverPause: true
    })

    /* owl carousel Testimonials Ar
    ====================*/
    $(".owl-carousel-testimonials-ar, .owl-carousel-testimonials2-ar").owlCarousel({
        loop: true,
        margin: 10,
        nav: false,
        rtl: true,
        items: 1,
        autoplay: true,
        autoplayTimeout: 70000,
        autoplayHoverPause: true
    })

    /* owl carousel Our Work
    ====================*/
    $(".owl-carousel-our-work").owlCarousel({
        loop: true,
        margin: 10,
        nav: false,
        items: 2,
        autoplay: true,
        autoplayTimeout: 7000,
        lazyLoad: true,
        autoplayHoverPause: true
    })

    /* owl carousel Our Work Ar
    ====================*/
    $(".owl-carousel-our-work-ar").owlCarousel({
        loop: true,
        margin: 10,
        lazyLoad: true,
        nav: false,
        rtl: true,
        items: 2,
        autoplay: true,
        autoplayTimeout: 7000,
        autoplayHoverPause: true
    })

});

/* Progress Line
====================*/
var delay = 500;
$(".progress-bar").each(function(i) {
    $(this).delay(delay * i).animate({
        width: $(this).attr('aria-valuenow') + '%'
    }, delay);

    $(this).prop('Counter', 0).animate({
        Counter: $(this).text()
    }, {
        duration: delay,
        easing: 'swing',
        step: function(now) {
            $(this).text(Math.ceil(now) + '%');
        }
    });
});

/* Lazy Load Images
====================*/
const images = document.querySelectorAll("[data-src]");

function preloadImage(img) {
    const src = img.getAttribute("data-src");
    if (!src) {
        return;
    }
    img.src = src;
}
const imgOptions = {
    threshold: 1,
    rootMargin: "0px 0px 300px 0px",
};
const imgObserver = new IntersectionObserver((entries, imgObserver) => {
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            return;
        } else {
            preloadImage(entry.target);
            imgObserver.unobserve(entry.target);
        }
    })
}, imgOptions);
images.forEach(image => {
    imgObserver.observe(image);
});