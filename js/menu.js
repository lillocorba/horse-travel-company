var burger = document.querySelector(".burgerBtn");
var menu = document.querySelector(".nav-links");
var linkHome = document.querySelector(".liHome");
var linkAbout = document.querySelector(".liAbout");
var linkProductos = document.querySelector(".liProductos");
var linkContacto = document.querySelector(".liContacto");
var linkFaq = document.querySelector(".liFaq");

burger.addEventListener("click", function abrirMenu() {
  menu.classList.toggle("active");
  burger.classList.toggle("toggle");
  linkHome.classList.toggle("link-active");
  linkAbout.classList.toggle("link-active");
  linkProductos.classList.toggle("link-active");
  linkContacto.classList.toggle("link-active");
  linkFaq.classList.toggle("link-active");
});

linkHome.addEventListener("click", function closeMenu() {
  menu.classList.toggle("active");
  burger.classList.remove("toggle");
  linkHome.classList.remove("link-active");
  linkAbout.classList.remove("link-active");
  linkProductos.classList.remove("link-active");
  linkContacto.classList.toggle("link-active");
  linkFaq.classList.remove("link-active");
});

linkAbout.addEventListener("click", function closeMenu() {
  menu.classList.remove("active");
  burger.classList.remove("toggle");
  linkHome.classList.remove("link-active");
  linkAbout.classList.remove("link-active");
  linkProductos.classList.remove("link-active");
  linkContacto.classList.remove("link-active");
});

linkProductos.addEventListener("click", function closeMenu() {
  menu.classList.remove("active");
  burger.classList.remove("toggle");
  linkHome.classList.remove("link-active");
  linkAbout.classList.remove("link-active");
  linkProductos.classList.remove("link-active");
  linkContacto.classList.remove("link-active");
  linkFaq.classList.remove("link-active");
});

linkContacto.addEventListener("click", function closeMenu() {
  menu.classList.remove("active");
  burger.classList.remove("toggle");
  linkHome.classList.remove("link-active");
  linkAbout.classList.remove("link-active");
  linkProductos.classList.remove("link-active");
  linkContacto.classList.remove("link-active");
  linkFaq.classList.remove("link-active");
});

linkFaq.addEventListener("click", function closeMenu() {
  menu.classList.remove("active");
  burger.classList.remove("toggle");
  linkHome.classList.remove("link-active");
  linkAbout.classList.remove("link-active");
  linkProductos.classList.remove("link-active");
  linkContacto.classList.remove("link-active");
  linkFaq.classList.remove("link-active");
});
