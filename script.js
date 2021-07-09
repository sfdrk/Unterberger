
$(document).ready(function () {

    $(".hamberger").on("click", function () {

        $(".test-class").animate({ 'width': 'toggle' });

        $("body").toggleClass("overflow-hidden");

        $(".fa-bars").toggleClass("fa-times");
    })

    const swiper = new Swiper('.swiper-container', {

        direction: 'horizontal',
        loop: true,

        // If we need pagination
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },

        // Navigation arrows
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });
})