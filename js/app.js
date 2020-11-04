/* ANIMACIONES DOCUMENT READY */

$(document).ready(function () {

    $(".hero__h1").addClass('hero__h1--active')
    $(".hero__container__btn").addClass('hero__container__btn--active')

})

/* ANIMACIONES QUIENES SOMOS */

$(document).scroll(function scrollSimulador() {

    if (window.scrollY > ($(".about__line").offset().top) - (window.innerHeight / 1.1)) {

        $(".about__line").addClass('about__line--active')

    }
})