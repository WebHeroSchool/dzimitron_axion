const burger = document.querySelector(".burger-menu");
const menu = document.querySelector(".menu");
const main = document.querySelector(".main");
const body = document.querySelector("body");
const products = document.querySelector(".slider-container");
const colorItems = document.querySelector(".color");
const video = document.querySelector(".video-content");
const playButton = document.querySelector(".video-content__play");
const searchForm = document.querySelector(".search-form__search");

let mobile;

burger.addEventListener('click', () => addAction());

function addAction() {
  if (mobile) {
    burger.classList.toggle("action");
    menu.classList.toggle('action');
    main.classList.toggle('action');
    body.classList.toggle('lock');
  }
}

function removeAction() {
    burger.classList.remove("action");
    menu.classList.remove('action');
    main.classList.remove('action');
    body.classList.remove('lock');
}

searchForm.addEventListener('click', () => {
  searchForm.value = "";
});

playButton.addEventListener('click', () => {
  playButton.insertAdjacentHTML('afterend', '<iframe class="video-content__video" src="https://www.youtube.com/embed/uNETYg7b4Pw?start=70&autoplay=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>');
});

if (innerWidth < 1024) {
  mobile = true;
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
    mobile = true;
    products.children[3].style.display = "none";
  } else {
    mobile = false;
    removeAction();
    products.children[3].style.display = "flex";
  }

  if (innerWidth < 896) {
    products.children[2].style.display = "none";
  } else products.children[2].style.display = "flex";

  if (innerWidth < 546) {
    products.children[1].style.display = "none";
  } else products.children[1].style.display = "flex";
}, false);
