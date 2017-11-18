$(document).ready(function () {
    $('.thumbnail').hover(function () {
        $('.slider', this).slideToggle('fast');
    });
    //$('.thumbnail').hover(function () {
    //    $('.slider', this).animate({
    //        opacity: 0.75,
            
    //        height: "toggle"
    //    }, 750, function () {
    //        //Animation complete.
    //    });
    //});

});