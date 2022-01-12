// loader 
// $(document).ready(function(){
// 	$('div#loading').removeAttr('id');
// });
var preloader = document.getElementById("loading");
// window.addEventListener('load', function(){
// 	preloader.style.display = 'none';
// 	})
function myFunction() {
    preloader.style.display = 'none';
};
// Banner Slick Slider Starts
$('.slider_banner').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    dots: false,
    responsive: [{
            breakpoint: 1400,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 1080,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 780,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                dots: true
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                dots: true
            }
        }
    ]
});
// Banner Slick Slider Ends
// Navigation Js Scroll Starts
$(window).scroll(function() {
        var scroll = $(window).scrollTop();
        if (scroll > 50) {
            $(".navigation-wrap").css("background", "white");
            $(".nav-link").css("color", "#484d67");
            $(".navigation-wrap").css("box-shadow", "rgb(0 0 0 / 20%) 0px 10px 10px -7px");
            $(".navigation-wrap").css("padding", "10px 0px");
            $(".navigation-wrap").css("border-bottom", "3px solid var(--main-color)");
        } else {
            $(".navigation-wrap").css("background", "white");
            $(".nav-link").css("color", "#484d67");
            $(".navigation-wrap").css("box-shadow", "none");
            $(".navigation-wrap").css("padding", "15px 0px");
            $(".navigation-wrap").css("border-bottom", "unset");
        }
    }) // Navigation Js Scroll Ends
$(document).ready(function() {

    // product Gallery and Zoom
    // activation carousel plugin
    var galleryThumbs = new Swiper('.gallery-thumbs', {
        spaceBetween: 5,
        freeMode: true,
        watchSlidesVisibility: true,
        watchSlidesProgress: true,
        breakpoints: {
            0: {
                slidesPerView: 3,
            },
            992: {
                slidesPerView: 4,
            },
        }
    });
    var galleryTop = new Swiper('.gallery-top', {
        spaceBetween: 10,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        thumbs: {
            swiper: galleryThumbs
        },
    });
    // change carousel item height
    // gallery-top
    let productCarouselTopWidth = $('.gallery-top').outerWidth();
    $('.gallery-top').css('height', productCarouselTopWidth);
    // gallery-thumbs
    let productCarouselThumbsItemWith = $('.gallery-thumbs .swiper-slide').outerWidth();
    $('.gallery-thumbs').css('height', productCarouselThumbsItemWith);
    // activation zoom plugin
    // var $easyzoom = $('.easyzoom').easyZoom();
    // Dropdown Menu On Hover


}); //   Video Play Button Pop Up Starts
$('#play-video').on('click', function(e) {
    e.preventDefault();
    $('#video-overlay').addClass('open');
    $("#video-overlay").append('<iframe width="560" height="315" src="https://www.youtube.com/embed/ngElkyQ6Rhs" frameborder="0" allowfullscreen></iframe>');
});

$('.video-overlay, .video-overlay-close').on('click', function(e) {
    e.preventDefault();
    close_video();
});

$(document).keyup(function(e) {
    if (e.keyCode === 27) { close_video(); }
});

function close_video() {
    $('.video-overlay.open').removeClass('open').find('iframe').remove();
};
//   Video Play Button Pop Up Ends