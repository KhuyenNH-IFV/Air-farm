$(document).ready(function() {
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
