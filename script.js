const burger = document.querySelector(".burger-menu");
const menu = document.querySelector(".menu");
const main = document.querySelector(".main");
const body = document.querySelector("body");

burger.addEventListener('click', () => {
  burger.classList.toggle("action");
  menu.classList.toggle('action');
  main.classList.toggle('action');
  body.classList.toggle('lock')
});