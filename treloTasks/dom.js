"use strict";
// Завдання 0:

// Створіть динамічну галерею зображень з наступними функціональностями:

// Додавання нового зображення через форму (URL та опис).

// Видалення зображення.

// Показ великого зображення при натисканні на маленьке зображення (lightbox ефект).

// Перехід між зображеннями в lightbox режимі.

"use strict";
const inputUrl = document.querySelector("input[name='url']");
const inputDesc = document.querySelector("input[name='description']");
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


function isValidUrl(string) {
  try {
    new URL(string);
    return true;
  } catch {
    return false;
  }
}

function createCard(url, description) {
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
  closeButton.classList.add("close-button");


  closeButton.addEventListener("click", () => {
    const indexToDelete = images.findIndex((item) => item.url === img.src);
    if (indexToDelete !== -1) images.splice(indexToDelete, 1);
    card.remove();
  });


  img.addEventListener("click", () => {
    currentIndex = images.findIndex((item) => item.url === img.src);
    showPreview(currentIndex);
  });

  card.appendChild(img);
  card.appendChild(p);
  card.appendChild(closeButton);
  return card;
}


function showPreview(index) {
  previewImg.src = images[index].url;
  previewImg.alt = images[index].description;
  previewText.textContent = images[index].description;
  previewBox.classList.add("show");
  shadow.style.display = "block";
}

closeIcon.addEventListener("click", () => {
  previewBox.classList.remove("show");
  shadow.style.display = "none";
});


prevBtn.addEventListener("click", () => {
  if (images.length === 0) return;
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  showPreview(currentIndex);
});

nextBtn.addEventListener("click", () => {
  if (images.length === 0) return;
  currentIndex = (currentIndex + 1) % images.length;
  showPreview(currentIndex);
});


buttonAdd.addEventListener("click", (e) => {
  e.preventDefault();
  const url = inputUrl.value.trim();
  const description = inputDesc.value.trim();

  if (!url || !description || !isValidUrl(url)) {
    alert("Будь ласка, введіть коректний URL та опис.");
    return;
  }

  const card = createCard(url, description);
  cardsContainer.appendChild(card);
  images.push({ url, description });

  inputUrl.value = "";
  inputDesc.value = "";
});
