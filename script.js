// 1. seleciona todas a imagems dos cards
const images = document.querySelectorAll(".card__img");

images.forEach((img) => {
  img.addEventListener("mouseenter", () => {
    img.classList.add("jump");
  });

  img.addEventListener("animationend", () => {
    img.classList.remove("jump");
  });
});

const form = document.querySelector(".newsletter__form");

form.addEventListener("submit", (event) => {
    event.preventDefault();
    alert("obrigado por assinar!");
});


const toggle = document.querySelector(".nav__toggle");
const menu = document.querySelector(".nav__menu");

toggle.addEventListener("click", () => {
  const isOpen = menu.classList.toggle("open");
  toggle.classList.toggle("open", isOpen);
  toggle.setAttribute("aria-expanded", isOpen);
});

// fecha o menu ao clicar em um link
menu.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    menu.classList.remove("open");
    toggle.classList.remove("open");
    toggle.setAttribute("aria-expanded", false);
  });
});

const searchBtn =document.querySelector(".nav__search");
const searchBox = document.querySelector(".search-box");

searchBtn.addEventListener("click", () => {
  searchBox.classList.toggle("open");
  if (searchBox.classList.contains("open")) searchBox.focus();
});