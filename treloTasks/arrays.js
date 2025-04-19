"use strict";
// №1 Створіть масив з трьох імен. Додайте нове ім'я до кінця масиву і виведіть його.

// №2 Видаліть перший елемент масиву і виведіть його.

// №3 Знайдіть індекс елемента зі значенням "John" в масиві ["Mike", "John", "Sara"].

// №1
let names = ["Anastasiia", "Artem", "Ira"];
names.push("Katia");
console.log(names);

// №2 
let nameFirst = names.shift();
console.log(nameFirst);
//Другий варіант
let deleteName = names.splice(0,1);
console.log(deleteName);


// №3 
let nameArray = ["Mike", "John", "Sara"];
let indexName = nameArray.indexOf("John");
console.log(indexName);
