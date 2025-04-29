'use strict';
// Завдання 0:

// Створіть динамічну галерею зображень з наступними функціональностями:

// Додавання нового зображення через форму (URL та опис).

// Видалення зображення.

// Показ великого зображення при натисканні на маленьке зображення (lightbox ефект).

// Перехід між зображеннями в lightbox режимі.

const input = document.getElementsByTagName('input');
let inputArray = [...input];
const buttonAdd = document.getElementsByClassName('add')[0];
const picture = document.getElementsByClassName('img1')[0];
const discription = document.getElementsByClassName('text1')[0];
const cardOne = document.querySelector('.cards');
const divOne = document.querySelector('.card'); 

console.log(inputArray);

let count = 1;

buttonAdd.addEventListener('click', () => {
  const url = inputArray[0].value;
  if (!picture.src || picture.src === window.location.href) {
    picture.src = url;
    discription.textContent = inputArray[1].value;
    let closeButton = document.createElement('button');
    closeButton.textContent = "X";
    discription.after(closeButton);
    closeButton.style.position = "relative";
    closeButton.style.top = "-430px";
    closeButton.style.right = "-190px";
    closeButton.addEventListener('click', () => {
      divOne.remove();
    })
  } else {
    let div = document.createElement('div');
    div.className = `card${(count += 1)}`;
    cardOne.append(div);
    let img = document.createElement('img');
    img.src = url;
    div.appendChild(img);
    let p = document.createElement('p');
    p.textContent = inputArray[1].value;
    div.appendChild(p);
    let closeButton = document.createElement('button');
    closeButton.textContent = "X";
    closeButton.style.position = "relative";
    closeButton.style.top = "-430px";
    closeButton.style.right = "-190px";
    div.appendChild(closeButton);
    closeButton.addEventListener('click', () => {
      div.remove();
    })
  }
});

