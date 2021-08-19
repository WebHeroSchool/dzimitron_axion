const burger = document.querySelector(".burger-menu");
const menu = document.querySelector(".menu");
const main = document.querySelector(".main");
const body = document.querySelector("body");
const products = document.querySelector(".slider-container");
const colorItems = document.querySelector(".color");
const video = document.querySelector(".video-content");
const playButton = document.querySelector(".video-content__play");

burger.addEventListener('click', () => {
  burger.classList.toggle("action");
  menu.classList.toggle('action');
  main.classList.toggle('action');
  body.classList.toggle('lock')
});

// const COLORS = {
//   GRAY: "#c4c4c4",
//   BLACK: "#0e1211",
//   RED: "#b62e3c",
//   YELLOW: "#fdb431",
//   BEIGE: "#e29d69",
//   BROWN: "#762e31",
//   PURPLE: "#41479b",
//   BLUE: "#257da9",
// }

playButton.addEventListener('click', () => {
  playButton.insertAdjacentHTML('afterend', '<iframe class="video-content__video" src="https://www.youtube.com/embed/uNETYg7b4Pw?start=70&autoplay=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>');
});

if (innerWidth < 1024) {
  products.children[3].style.display = "none";
} else products.children[3].style.display = "flex";

if (innerWidth < 896) {
  products.children[2].style.display = "none";
} else products.children[2].style.display = "flex";

if (innerWidth < 546) {
  products.children[1].style.display = "none";
} else products.children[1].style.display = "flex";

window.addEventListener(`resize`, () => {
  if (innerWidth < 1024) {
    products.children[3].style.display = "none";
  } else products.children[3].style.display = "flex";

  if (innerWidth < 896) {
    products.children[2].style.display = "none";
  } else products.children[2].style.display = "flex";

  if (innerWidth < 546) {
    products.children[1].style.display = "none";
  } else products.children[1].style.display = "flex";
}, false);
