/* ANIMACIONES DOCUMENT READY */

var hero__h1 = document.querySelector('.hero__h1')
var hero__btn = document.querySelector('.hero__container__btn')

document.addEventListener("DOMContentLoaded", function () {
    hero__h1.classList.add('hero__h1--active')
    hero__btn.classList.add('hero__container__btn--active')
});

/* ANIMACIONES QUIENES SOMOS */

var about__line = document.querySelector('.about__line')
var about__title = document.querySelector('.about__title')
var about__p = document.querySelector('.about__p')
var container__about = document.querySelector('.container__about')

document.addEventListener('scroll', function () {
    if (window.scrollY > (window.pageYOffset + container__about.getBoundingClientRect().top) - (window.innerHeight / 1.1)) {

        container__about.classList.add('container__about--active')

    }
})

/* ANIMACIONES MISION, VISION, VALOR */

var container__mision = document.querySelector('.container__mision')
var container__vision = document.querySelector('.container__vision')
var container__valor = document.querySelector('.container__valor')

document.addEventListener('scroll', function () {
    if (window.scrollY > (window.pageYOffset + container__mision.getBoundingClientRect().top) - (window.innerHeight / 1.1)) {

        container__mision.classList.add('container__mision--active')
        container__vision.classList.add('container__vision--active')
        container__valor.classList.add('container__valor--active')

    }
})

/* ANIMACIONES SERVICIOS */

var servicios__line = document.querySelector('.servicios__line')
var servicios__h2 = document.querySelector('.servicios__h2')

document.addEventListener('scroll', function () {
    if (window.scrollY > (window.pageYOffset + servicios__line.getBoundingClientRect().top) - (window.innerHeight / 1)) {

        servicios__line.classList.add('servicios__line--active')
        servicios__h2.classList.add('servicios__h2--active')

    }
})

var servicios__col__2 = document.querySelector('.servicios__col2')

document.addEventListener('scroll', function () {
    if (window.scrollY > (window.pageYOffset + servicios__line.getBoundingClientRect().top) - (window.innerHeight / 1.1)) {

        servicios__col__2.classList.add('servicios__col2--active')

    }
})

var servicios__col__3 = document.querySelector('.servicios__col3')

document.addEventListener('scroll', function () {
    if (window.scrollY > (window.pageYOffset + servicios__col__3.getBoundingClientRect().top) - (window.innerHeight / 1.1)) {

        servicios__col__3.classList.add('servicios__col3--active')

    }
})

var servicios__col__4 = document.querySelector('.servicios__col4')

document.addEventListener('scroll', function () {
    if (window.scrollY > (window.pageYOffset + servicios__col__4.getBoundingClientRect().top) - (window.innerHeight / 1.1)) {

        servicios__col__4.classList.add('servicios__col4--active')

    }
})

var servicios__row2__col1 = document.querySelector('.servicios__row2__col1')

document.addEventListener('scroll', function () {
    if (window.scrollY > (window.pageYOffset + servicios__row2__col1.getBoundingClientRect().top) - (window.innerHeight / 1.1)) {

        servicios__row2__col1.classList.add('servicios__row2__col1--active')

    }
})

var servicios__row2__col2 = document.querySelector('.servicios__row2__col2')

document.addEventListener('scroll', function () {
    if (window.scrollY > (window.pageYOffset + servicios__row2__col2.getBoundingClientRect().top) - (window.innerHeight / 1.1)) {

        servicios__row2__col2.classList.add('servicios__row2__col2--active')

    }
})

var servicios__row2__col3 = document.querySelector('.servicios__row2__col3')

document.addEventListener('scroll', function () {
    if (window.scrollY > (window.pageYOffset + servicios__row2__col3.getBoundingClientRect().top) - (window.innerHeight / 1.1)) {

        servicios__row2__col3.classList.add('servicios__row2__col3--active')

    }
})

var servicios__row3__col1 = document.querySelector('.servicios__row3__col1')

document.addEventListener('scroll', function () {
    if (window.scrollY > (window.pageYOffset + servicios__row3__col1.getBoundingClientRect().top) - (window.innerHeight / 1.1)) {

        servicios__row3__col1.classList.add('servicios__row3__col1--active')

    }
})

var servicios__row3__col2 = document.querySelector('.servicios__row3__col2')

document.addEventListener('scroll', function () {
    if (window.scrollY > (window.pageYOffset + servicios__row3__col2.getBoundingClientRect().top) - (window.innerHeight / 1.1)) {

        servicios__row3__col2.classList.add('servicios__row3__col2--active')

    }
})

var servicios__row3__col3 = document.querySelector('.servicios__row3__col3')

document.addEventListener('scroll', function () {
    if (window.scrollY > (window.pageYOffset + servicios__row3__col3.getBoundingClientRect().top) - (window.innerHeight / 1.1)) {

        servicios__row3__col3.classList.add('servicios__row3__col3--active')

    }
})

/* ANIMACIONES ELEGIRNOS */

var elegirnos__h3 = document.querySelector('.elegirnos__h3')
var container__elegirnos__p = document.querySelector('.container__elegirnos__p')
var elegirnos__h4 = document.querySelector('.elegirnos__h4')

document.addEventListener('scroll', function () {
    if (window.scrollY > (window.pageYOffset + elegirnos__h3.getBoundingClientRect().top) - (window.innerHeight / 1.1)) {

        elegirnos__h3.classList.add('elegirnos__h3--active')
        container__elegirnos__p.classList.add('container__elegirnos__p--active')
        elegirnos__h4.classList.add('elegirnos__h4--active')

    }
})

/* ANIMACIONES CONTACTO */

var contacto__line = document.querySelector('.contacto__line')
var contacto__h3 = document.querySelector('.contacto__h3')
var contacto__form = document.querySelector('.contacto__form')

document.addEventListener('scroll', function () {
    if (window.scrollY > (window.pageYOffset + contacto__line.getBoundingClientRect().top) - (window.innerHeight / 1.1)) {

        contacto__line.classList.add('contacto__line--active')
        contacto__h3.classList.add('contacto__h3--active')
        contacto__form.classList.add('contacto__form--active')

    }
})