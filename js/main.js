(function ($) {
    "use strict";
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 200) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });
    
    
    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 0) {
            $('.navbar').addClass('nav-sticky');
        } else {
            $('.navbar').removeClass('nav-sticky');
        }
    });
    
    
    // Dropdown on mouse hover
    $(document).ready(function () {
        function toggleNavbarMethod() {
            if ($(window).width() > 992) {
                $('.navbar .dropdown').on('mouseover', function () {
                    $('.dropdown-toggle', this).trigger('click');
                }).on('mouseout', function () {
                    $('.dropdown-toggle', this).trigger('click').blur();
                });
            } else {
                $('.navbar .dropdown').off('mouseover').off('mouseout');
            }
        }
        toggleNavbarMethod();
        $(window).resize(toggleNavbarMethod);
    });

    
    // Main carousel
    $(".carousel .owl-carousel").owlCarousel({
        autoplay: true,
        animateOut: 'fadeOut',
        animateIn: 'fadeIn',
        items: 1,
        smartSpeed: 300,
        dots: false,
        loop: true,
        nav : false,
    });
    
    // Modal Video
    $(document).ready(function () {
        var $videoSrc;
        $('.btn-play').click(function () {
            $videoSrc = $(this).data("src");
        });
        console.log($videoSrc);

        $('#videoModal').on('shown.bs.modal', function (e) {
            $("#video").attr('src', $videoSrc + "?autoplay=1&amp;modestbranding=1&amp;showinfo=0");
        })

        $('#videoModal').on('hide.bs.modal', function (e) {
            $("#video").attr('src', $videoSrc);
        })
    });
    
    
    // Date and time picker
    $('#date').datetimepicker({
        format: 'L'
    });
    $('#time').datetimepicker({
        format: 'LT'
    });


    // Testimonials carousel
    $(".testimonials-carousel").owlCarousel({
        center: true,
        autoplay: true,
        dots: true,
        loop: true,
        responsive: {
            0:{
                items:1
            },
            576:{
                items:1
            },
            768:{
                items:2
            },
            992:{
                items:3
            }
        }
    });

    // Promo Modal
    $(document).ready(function () {
        var isHomePage = window.location.pathname === "/" || 
            window.location.pathname.includes("index.html"); // restrict to index.html
        
        /*
        if (isHomePage && !sessionStorage.getItem('promoModalShown')) {
            setTimeout(function () {
                $('#promoModal').modal('show');
                sessionStorage.setItem('promoModalShown', 'true');
            }, 1000);
        }
        */

        if (isHomePage) {
        setTimeout(function () {
            $('#promoModal').modal('show');
        }, 1000);
    }
    });
    
    
    // Related post carousel
    $(".related-slider").owlCarousel({
        autoplay: false,
        dots: true,
        loop: false,
        nav: true,
        margin: 30,
        navText : [
            '<i class="fa fa-angle-left"></i>',
            '<i class="fa fa-angle-right"></i>'
        ],
            responsive: {
                0:{
                    items: 1,
                    nav: true
                },
                768:{
                    items: 2,
                    nav: true
                }
            }
    });

    // Dynamic Menu Image Swap Burgers
    $(document).on('mouseenter', '.menu-item', function () {
        var newImgSrc = $(this).find('.menu-img img').attr('src');
        $('#mainMenuImgBurgers').attr('src', newImgSrc);
        console.log("Hovered! New Source: " + newImgSrc);
    });

    // Dynamic Menu Image Swap Sides
    $(document).on('mouseenter', '.menu-item', function () {
        var newImgSrc = $(this).find('.menu-img img').attr('src');
        $('#mainMenuImgSides').attr('src', newImgSrc);
        console.log("Hovered! New Source: " + newImgSrc);
    });

    // Dynamic Menu Image Swap Milkshakes
    $(document).on('mouseenter', '.menu-item', function () {
        var newImgSrc = $(this).find('.menu-img img').attr('src');
        $('#mainMenuImgMilkshakes').attr('src', newImgSrc);
        console.log("Hovered! New Source: " + newImgSrc);
    });

    // Dynamic Menu Image Swap Lemonades
    $(document).on('mouseenter', '.menu-item', function () {
        var newImgSrc = $(this).find('.menu-img img').attr('src');
        $('#mainMenuImgLemonades').attr('src', newImgSrc);
        console.log("Hovered! New Source: " + newImgSrc);
    });

    // Mobile Menu Modal
    $(document).on('click', '.menu-item', function () {
        if ($(window).width() < 992) {
            // get data from the clicked item
            var imgSrc = $(this).find('.menu-img img').attr('src');
            var itemTitle = $(this).find('.menu-text h3 span').text();

            // inject data into the modal
            $('#popupImg').attr('src', imgSrc);
            $('#popupTitle').text(itemTitle);

            // show the modal
            $('#mobileImageModal').modal('show');
        }
    });
    
})(jQuery);

