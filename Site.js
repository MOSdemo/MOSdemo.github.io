$(document).ready(function () {
    $('.thumbnail').hover(function () {
        $('.image-caption', this).slideToggle('fast');
    });
});