$(document).ready(function() {
    // Tab
    $('.title-tab a').click(function(e) {
        e.preventDefault();
    })

    // accordion nav-left
    $('.heading-nav').click(function(event) {
        // var checkHas = $('.collapse').hasClass('in');
        // alert("alo");
        $(this).find('.icon-has').toggleClass('glyphicon-plus glyphicon-minus');
        // if ($('.glyphicon-minus').hasClass('glyphicon-plus')){
        //     $('.glyphicon-minus').removeClass('glyphicon-minus');
        // } else {
        //     // $('.glyphicon-plus').addClass('glyphicon-minus');
        // }
        // if ($(this).find('.collapse').hasClass('in')) {
        //     $(this).find('.icon-tru').toggleClass('icon-tru, icon-cong');
        // }
    });
});
