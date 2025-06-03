"use strict";

// Завдання:

// Реалізуйте систему управління бібліотекою книг. Створіть конструктор Book, який має властивості title, author, і year. Потім створіть конструктор EBook, який наслідує Book і додає властивість fileSize та метод для завантаження книги. Додайте метод для виведення інформації про книгу (title і author) в прототип Book і переконайтесь, що EBook успадковує цей метод.

// Вимоги:

// 1.Використовуйте прототипи для наслідування.

// 2.Додайте метод для виведення інформації про книгу до прототипу Book.

// 3.Створіть метод для завантаження електронної книги в конструкторі EBook.

// 4.Переконайтесь, що метод для виведення інформації про книгу працює для об'єктів EBook.

function Book(title, author, year) {
  this.title = title;
  this.author = author;
  this.year = year;
}

Book.prototype.infoBook = function () {
  console.log(`Info: ${this.title}, ${this.author}`);
};

function EBook(title, author, year, fileSize) {
  Book.call(this, title, author, year);
  this.fileSize = fileSize;
}

EBook.prototype = Object.create(Book.prototype);

EBook.prototype.download = function () {
  console.log(`Завантаження книги ${this.title}, розміром ${this.fileSize}`);
};

const koloniia = new Book("Koloniia", "Maks Kidruk", 2023);
console.log(koloniia);
koloniia.infoBook();

const vybir = new EBook("The Choice", "Edit Yeva Eger", 2020, 20);
console.log(vybir);
vybir.infoBook();
vybir.download();
