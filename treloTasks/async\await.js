'use strict';
// №1 Створіть асинхронну функцію, яка повертає "Hello, World!" через 1 секунду.

// №2 Викличте цю функцію і виведіть результат в консоль.

// №3 Використовуйте try/catch для обробки помилки в асинхронній функції, яка кидає помилку.

async function getHello() {
  try {
    let promise = new Promise((resolve, reject) => {
      setTimeout(() => resolve('Hello, World!'), 1000);
    });
    let result = await promise;
    console.log(result);
  } catch (err) {
    console.log(err);
  }
}

getHello();

