$(document).ready(function () {
    $('.thumbnail').hover(function () {
        $('.slider', this).slideToggle('fast');
    });
});