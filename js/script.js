$(document).ready(function() {
    // Nav top mobile
    $('.btn-toggle').click(function(event) {
        $('.nav-top').slideToggle();
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
        $('.toggle-in').slideToggle();
    });

    // click show thumbnail
    $('.img-thumb').click(function(e) {
        e.preventDefault();
        let dataImg = $(this).attr('data-imgThumb');
        $('.product-details .img-avatar img').attr('src', dataImg);
    });

    // Check width browser
    var wBrowser = $(window).width();
    if (wBrowser <= 768) {
        $('#rau-nav.collapse').removeClass('in');
        $('.rau-js').toggleClass('glyphicon-minus glyphicon-plus');
    }
});
