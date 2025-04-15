"use strict";

// №1 Напишіть функцію, яка приймає два числа і повертає їх суму.

// №2 Напишіть функцію, яка приймає рядок і повертає його в верхньому регістрі.

// №3 Напишіть функцію, яка приймає масив чисел і повертає новий масив з квадратами цих чисел.

// №1
function sum(num1, num2) {
   return num1 + num2;
};
console.log(sum(2, 2));

// №2
function upperCase (str) {
   return str.toUpperCase();
};
console.log(upperCase('hello'));

// №3
function arraySqure(array) {
   let arrSqure = [];
   for (let i = 0; i < array.length; i++) {
      let a = array[i] * array[i];
      arrSqure.push(a);
   }
   return arrSqure;
}

console.log(arraySqure([1, 2, 3]));
