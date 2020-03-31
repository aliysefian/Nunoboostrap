/* navigation bar transparent */

$(document).ready(function () {
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.navbar').addClass('solid');
            console.log("add");

        } else {
            $('.navbar').removeClass('solid');
            console.log("remove");

        }
    })
});
