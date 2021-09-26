(function($) {
    "use strict";

    jQuery(document).ready(function($) {

         // -------------slicknav------------
        $('#navbar').slicknav();
                        // -------------sticky------------
        $('.header-area').sticky({
            topSpacing: 0,
        })

        // -----------------owl-carousel---------
        $('.testimonial-carousel-row').owlCarousel({
            items: 3,
            loop: true,
            autoplay: true,
            autoplayHoverPause: true,
            margin: 30,
            dots: false,
            nav: true,
            autoplaySpeed: 3000,
            smartSpeed: 2000,
            Speed: 500,
            responsive: {
                0: {
                    items: 1,
                    dots: false,
                },
                479: {
                    items: 1,
                    dots: false,
                },
                601: {
                    items: 2,
                    dots: false,
                },
                991: {
                    items: 3,
                }
            }
        });


        $('.latest-news-carousel').owlCarousel({
            items: 3,
            loop: true,
            autoplay: true,
            autoplayHoverPause: true,
            dots: true,
            margin: 30,
            autoplaySpeed: 3000,
            smartSpeed: 2000,
            Speed: 500,
            responsive: {
                0: {
                    items: 1,
                    dots: false,
                },
                479: {
                    items: 1,
                    dots: false,
                },
                601: {
                    items: 2,
                    dots: false,
                },
                992: {
                    items: 3,
                }
            }
        });

         /*----------------------
         15.scroll top js
         -------------------------*/
      

         $(window).on('scroll', function () {
            var scroll = $(window).scrollTop();
            if (scroll < 300) {
                $(".smooth-scroll").removeClass("active-st");
            } else {
                $(".smooth-scroll").addClass("active-st");
            }
        });

         var wow = new WOW({
                  //disabled for mobile
                    mobile: false
                });

            wow.init();


    });

    jQuery(window).load(function() {
        $(".loader").fadeOut(1000); // this will be active for 

    });

}(jQuery));