$(document).ready(function() {
    // Check width browser
    var wBrowser = $(window).width();
    if (wBrowser <= 768) {
        $('#rau-nav.collapse').removeClass('in');
        $('.rau-js').toggleClass('glyphicon-minus glyphicon-plus');

        $('.logo').insertBefore($('.btn-toggle .fa-bars'));
        $('.title-logo').insertBefore($('.btn-toggle .fa-bars'));
    } else {
        // Scroll fixed nav top
        var topScroll = $('.section-slider').offset().top;
        $(window).scroll(function(event) {
            if ($(this).scrollTop() >= topScroll) {
                $('.headerIn').addClass('fixed');
                $('.logo').fadeOut();
                // $('.thucphamsach').attr('src', 'images/');
                $('.title-logo').addClass('scroll-title');
                $('.section-slider>.container>.nav-slider').addClass('fixed');
                $('.heading-nav.toggle a').css('border', '2px solid #fff');
                $('.toggle-in').removeClass('flag');
            } else {
                $('.headerIn').removeClass('fixed');
                $('.logo').fadeIn();
                $('.title-logo').removeClass('scroll-title');
                $('.section-slider>.container>.nav-slider').removeClass('fixed');
                $('.heading-nav.toggle a').css('border', '2px solid transparent');
                // $('.toggle-in').addClass('flag');
            }
        });
    }

    // var pageScroll = $('.products-contents').offset().top;
    // $(window).scroll(function(event) {
    //     if ($(this).scrollTop() >= (pageScroll - 120)) {
    //         $('.products-contents #nav-left').addClass('fixed');
    //     } else {
    //         $('.products-contents #nav-left').removeClass('fixed');
    //     }
    // });

    // var hBrowser = $(document).height();
    // var hFooter = $(window).height();
    // var scrollToFooter = hBrowser - hFooter;
    // $(window).scroll(function(event) {
    //     if ($(this).scrollTop() >= (scrollToFooter - 550)) {
    //         $('.products-contents #nav-left').addClass('absolute').removeClass('fixed');
    //     } else {
    //         $('.products-contents #nav-left').removeClass('absolute');
    //     }
    // });



    // Nav top mobile
    $('.btn-toggle').click(function(event) {
        $('.nav-top').stop().slideToggle();
    });
    // Tab
    $('.title-tab a').click(function(e) {
        e.preventDefault();
    })

    // accordion nav-left
    $('.heading-nav').click(function(event) {
        $(this).find('.icon-has').toggleClass('glyphicon-plus glyphicon-minus');
    });

    $('.toggle').click(function(event) {
        event.preventDefault();
        $('.toggle-in').stop().slideToggle();
        // $('.toggle-in').stop().slideDown();
    });

    // $('.heading-nav.toggle a').click(function(event) {
    //     return false;
    // });

    // click show thumbnail
    $('.img-thumb').click(function(e) {
        e.preventDefault();
        let dataImg = $(this).attr('data-imgThumb');
        $('.product-details .img-avatar img').attr('src', dataImg);
    });

});
