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
                $('.title-logo').addClass('scroll-title');
                $('.section-slider>.container>.nav-slider').addClass('fixed');
                $('.heading-nav.toggle a').css('border', '2px solid #fff');
                $('.toggle-in').removeClass('flag');

                $('.toggle-wrap').slideUp();

                $('.toggle-in').removeAttr('class', 'toggle-in');
                $('.heading-nav.toggle').click(function(event) {
                    // if($('.toggle-wrap:visible')){
                    //     $('.toggle-wrap').stop().hide();
                    // }
                    $('.toggle-wrap').stop().slideToggle();
                });
            } else {
                $('.headerIn').removeClass('fixed');
                $('.logo').fadeIn();
                $('.title-logo').removeClass('scroll-title');
                $('.section-slider>.container>.nav-slider').removeClass('fixed');
                $('.heading-nav.toggle a').css('border', '2px solid transparent');

                $('.toggle-wrap').slideDown();
                // $('.toggle-in').addClass('flag');
                // $('.toggle-in').removeAttr('class', 'toggle-in');
            }
        });
    }


    // Nav top mobile
    $('.fa-bars').click(function(event) {
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
    // click show thumbnail
    $('.img-thumb').click(function(e) {
        e.preventDefault();
        let dataImg = $(this).attr('data-imgThumb');
        $('.product-details .img-avatar img').attr('src', dataImg);
    });

});
