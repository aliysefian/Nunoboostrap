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
/* close navigation bar transparent */
$(document).ready(function () {
    $(document).click(function (e) {
        var ele = $(e.target);
        var _opened = $(".navbar-collapse").hasClass("show");
        if (_opened === true && !ele.hasClass('.nabar-toggler')) {
            $('.navbar-toggler').click();
        }
    })
});