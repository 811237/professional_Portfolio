// Initiates scripts after DOM is loaded;
$(document).ready(function() {

    // Global variable housing;



    // Function housing;



    // Run on load housing;



    // Action-lead event housing;
    $(window).scroll(function() {
        if ($(this).scrollTop() > 100) {
            $('.nav-email').fadeOut(100);
            $('.top-navbar').css({
                'height': '60px',
                'border-bottom': '2px solid lightgrey',});
            }else {
            $('.nav-email').fadeIn(100);
            $('.top-navbar').css({
                'height': '120px',
                'border-bottom': 'none',});
        }
    });

    let contact_rotate = 0;
    $('.contact').click(function() {
        contact_rotate += 180;
        let b = contact_rotate + 'deg';
        $('.toggle').css({
            'transform': `rotate(${b})`
        })
    });

});