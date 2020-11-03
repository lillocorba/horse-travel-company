var burger = document.querySelector(".burgerBtn");
var menu = document.querySelector(".nav-links");
var linkHome = document.querySelector(".liHome");
var linkAbout = document.querySelector(".liAbout");
var linkServicios = document.querySelector(".liServicios");
var linkContacto = document.querySelector(".liContacto");

burger.addEventListener("click", function abrirMenu() {
  menu.classList.toggle("active");
  burger.classList.toggle("toggle");
  linkHome.classList.toggle("link-active");
  linkAbout.classList.toggle("link-active");
  linkServicios.classList.toggle("link-active");
  linkContacto.classList.toggle("link-active");
});

linkHome.addEventListener("click", function closeMenu() {
  menu.classList.toggle("active");
  burger.classList.remove("toggle");
  linkHome.classList.remove("link-active");
  linkAbout.classList.remove("link-active");
  linkServicios.classList.remove("link-active");
  linkContacto.classList.toggle("link-active");
});

linkAbout.addEventListener("click", function closeMenu() {
  menu.classList.remove("active");
  burger.classList.remove("toggle");
  linkHome.classList.remove("link-active");
  linkAbout.classList.remove("link-active");
  linkServicios.classList.remove("link-active");
  linkContacto.classList.remove("link-active");
});

linkServicios.addEventListener("click", function closeMenu() {
  menu.classList.remove("active");
  burger.classList.remove("toggle");
  linkHome.classList.remove("link-active");
  linkAbout.classList.remove("link-active");
  linkServicios.classList.remove("link-active");
  linkContacto.classList.remove("link-active");
});

linkContacto.addEventListener("click", function closeMenu() {
  menu.classList.remove("active");
  burger.classList.remove("toggle");
  linkHome.classList.remove("link-active");
  linkAbout.classList.remove("link-active");
  linkServicios.classList.remove("link-active");
  linkContacto.classList.remove("link-active");
});
