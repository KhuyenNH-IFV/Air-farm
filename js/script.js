$(document).ready(function() {
    // Check width browser
    var wBrowser = $(window).width();
    if (wBrowser <= 768) {
        $('#rau-nav.collapse').removeClass('in');
        $('.rau-js').toggleClass('glyphicon-minus glyphicon-plus');
        $('.logo').insertBefore($('.btn-toggle .fa-bars'));
        $('.title-logo').insertBefore($('.btn-toggle .fa-bars'));
    } else {
        // Scroll
        var topScroll = $('.section-slider').offset().top;
        $(window).scroll(function(event) {
            if ($(this).scrollTop() >= topScroll) {
                $('.headerIn').addClass('fixed');
                $('.logo').fadeOut();
                $('.title-logo').addClass('scroll-title');
                $('.section-slider>.container>.nav-slider').addClass('fixed');
                $('.heading-nav.toggle a').css('border', '2px solid #fff');

                $('#flag-id').addClass('toggle-prd');

                // scroll xuống ẩn list danh mục
                $('.top-page .toggle-in').slideUp();
                $('.toggle-wrap').slideUp();
                $('.toggle-sub').addClass('flag');
                if ($('body').hasClass('top-page')) {
                    $('.toggle-in').addClass('flag');
                }

            } else {
                $('.headerIn').removeClass('fixed');
                $('.logo').fadeIn();
                $('.title-logo').removeClass('scroll-title');
                $('.section-slider>.container>.nav-slider').removeClass('fixed');
                $('.heading-nav.toggle a').css('border', '2px solid transparent');

                // scroll top hiện list danh mục
                $('.toggle-wrap').slideDown();
                $('.toggle-in').show();


                $('.toggle').click(function(event) {
                    event.preventDefault();
                    $('.toggle-in').stop().slideToggle();
                });
                // $('#toggle-prd').addClass('toggle');
            }
        });
    }

    $('.top-page .toggle').click(function(event) {
        event.preventDefault();
        $('.toggle-in').stop().slideToggle();
    });

    $('.toggle-prd').click(function(event) {
        event.preventDefault();
        $('.toggle-wrap').stop().slideToggle();
    });

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


    // click show thumbnail
    $('.img-thumb').click(function(e) {
        e.preventDefault();
        let dataImg = $(this).attr('data-imgThumb');
        $('.product-details .img-avatar img').attr('src', dataImg);
    });

});
