// Initiates scripts after DOM is loaded;
$(document).ready(function() {

    // Global variable housing;



    // Function housing;



    // Run on load housing;



    // Action-lead event housing;
    $(window).scroll(function() {
        if ($(this).scrollTop() > 100) {
            $('.nav-name').css({'grid-row': '1 / 3'});
            $('.nav-email').css({'display': 'none'});
            $('.top-navbar').css({'height': '60px'});
        }else {
            $('.nav-email').css({'display': 'block'});
            $('.nav-name').css({'grid-row': '1 / 2'});
            $('.top-navbar').css({'height': '120px'});
        }
    });

});