"use strict";

// Створіть проміс, який резолвиться через 2 секунди з повідомленням "Promise resolved!".

// Використовуйте then для виведення повідомлення, коли проміс буде резолвлено.

// Створіть проміс, який відхиляється з помилкою "Promise rejected!" та обробіть цю помилку за допомогою catch.

let success = new Promise(function(resolve, reject) {
   setTimeout(() => {
      resolve("Promise resolved!")
   }, 2000);
});


success.then(result => console.log(result));

let fail = new Promise(function(resolve, reject) {
   reject("Promise rejected!");
});

fail.catch(reject => console.log(reject));
