"use strict";
// Завдання 0:

// Створіть динамічну галерею зображень з наступними функціональностями:

// Додавання нового зображення через форму (URL та опис).

// Видалення зображення.

// Показ великого зображення при натисканні на маленьке зображення (lightbox ефект).

// Перехід між зображеннями в lightbox режимі.

const inputs = document.getElementsByTagName("input");
const buttonAdd = document.querySelector(".add");
const cardsContainer = document.querySelector(".cards");
const previewBox = document.querySelector(".preview-box");
const previewImg = previewBox.querySelector("img");
const previewText = previewBox.querySelector("p");
const closeIcon = document.querySelector(".icon");
const shadow = document.querySelector(".shadow");
const prevBtn = document.querySelector(".slide.prev button");
const nextBtn = document.querySelector(".slide.next button");

let images = [];
let currentIndex = 0;

buttonAdd.addEventListener("click", (e) => {
  e.preventDefault();
  const url = inputs[0].value.trim();
  const description = inputs[1].value.trim();
  if (!url) return;

  const card = document.createElement("div");
  card.classList.add("card");

  const img = document.createElement("img");
  img.src = url;
  img.alt = description;
  img.classList.add("gallery-img");

  const p = document.createElement("p");
  p.textContent = description;

  const closeButton = document.createElement("button");
  closeButton.textContent = "X";
  closeButton.style.position = "relative";
  closeButton.style.top = "-30px";
  closeButton.style.right = "-160px";

  card.appendChild(img);
  card.appendChild(p);
  card.appendChild(closeButton);
  cardsContainer.appendChild(card);

  images.push({ url, description });
  const imgIndex = images.length - 1;

  closeButton.addEventListener("click", () => {
    card.remove();
    images.splice(imgIndex, 1);
  });

  img.addEventListener("click", () => {
    currentIndex = images.findIndex((item) => item.url === img.src);
    showPreview(currentIndex);
  });

  inputs[0].value = "";
  inputs[1].value = "";
});

function showPreview(index) {
  previewImg.src = images[index].url;
  previewText.textContent = images[index].description;
  previewBox.classList.add("show");
  shadow.style.display = "block";
}

closeIcon.addEventListener("click", () => {
  previewBox.classList.remove("show");
  shadow.style.display = "none";
});

prevBtn.addEventListener("click", () => {
  if (currentIndex > 0) {
    currentIndex--;
    showPreview(currentIndex);
  }
});

nextBtn.addEventListener("click", () => {
  if (currentIndex < images.length - 1) {
    currentIndex++;
    showPreview(currentIndex);
  }
});
