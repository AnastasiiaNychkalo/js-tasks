"use strict";
// Завдання:

// Створіть інтерактивну форму реєстрації користувача. Форма повинна включати поля для імені, електронної пошти, та пароля. Реалізуйте наступні функціональності:

// Валідація полів форми при натисканні кнопки "Submit".

// Відображення повідомлень про помилки під відповідними полями.

// Динамічне відображення підказок при фокусуванні на поле вводу.

// Відправка даних форми за допомогою події submit, якщо всі поля пройшли валідацію.

// Вимоги:

// Використовуйте події focus, blur, input та submit для управління взаємодією користувача.

// Забезпечте динамічну валідацію даних в полях форми.

// Відображайте та приховуйте повідомлення про помилки та підказки залежно від взаємодії користувача.

const form = document.querySelector(".form");
const inputName = document.querySelector(".input-name");
const spanName = document.querySelector(".span-name");
const inputEmail = document.querySelector(".input-email");
const spanEmail = document.querySelector(".span-email");
const inputPassword = document.querySelector(".input-password");
const spanPassword = document.querySelector(".span-password");
const successMessage = document.querySelector(".success");
const errorName = document.querySelector(".span-name-error");
const errorEmail = document.querySelector(".span-email-error");
const errorPassword = document.querySelector(".span-password-error");

form.addEventListener("focusin", (event) => {
  if (event.target.classList.contains("input-name")) {
    spanName.innerHTML = "Write the name, first letter capitalized.";
    errorName.innerHTML = "";
  } else if (event.target.classList.contains("input-email")) {
    spanEmail.innerHTML =
      "Please enter a valid email address (e.g. name@example.com).";
    errorEmail.innerHTML = "";
  } else if (event.target.classList.contains("input-password")) {
    spanPassword.innerHTML = "Don't use simple passwords (e.g. 123456)";
    errorPassword.innerHTML = "";
  }
});

form.addEventListener("focusout", (event) => {
  if (event.target.classList.contains("input-name")) {
    spanName.innerHTML = "";
  } else if (event.target.classList.contains("input-email")) {
    spanEmail.innerHTML = "";
  } else if (event.target.classList.contains("input-password")) {
    spanPassword.innerHTML = "";
  }
});

form.addEventListener("input", (event) => {
  const value = event.target.value;
  if (event.target.classList.contains("input-name")) {
    spanName.innerHTML =
      value[0] != value[0].match(/[A-Z]/)
        ? "The first letter must be capitalized"
        : "Looks good!";
  } else if (event.target.classList.contains("input-email")) {
    spanEmail.innerHTML = value.includes("@")
      ? "Looks good!"
      : "Make sure the address contains @ and the domain.";
  } else if (event.target.classList.contains("input-password")) {
    spanPassword.innerHTML =
      value.length < 4
        ? "Password must contain more than 4 symbol"
        : "Looks good!";
  }
});

form.addEventListener("submit", (event) => {
  event.preventDefault();
  let isValid = true;
  if (
    inputName.value.trim().length === 0 ||
    !inputName.value[0].match(/[A-Z]/)
  ) {
    errorName.innerHTML = "The first letter must be capitalized";
    errorName.style.color = "red";
    isValid = false;
  }
  if (!inputEmail.value.includes("@")) {
    errorEmail.innerHTML = "Make sure the address contains @ and the domain.";
    errorEmail.style.color = "red";
    isValid = false;
  }
  if (inputPassword.value.length < 4) {
    errorPassword.innerHTML = "Password must contain more than 4 symbol";
    errorPassword.style.color = "red";
    isValid = false;
  }
  if (isValid) {
    successMessage.innerHTML = "The form has been successfully submitted!";
    successMessage.style.color = "green";
    form.reset();
  }
});
