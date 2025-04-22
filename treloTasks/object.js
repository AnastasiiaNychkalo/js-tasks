"use strict";
// №1 Створіть об'єкт, який представляє книгу з властивостями title, author та year.

// №2 Додайте нову властивість genre до об'єкта книги.

// №3 Видаліть властивість year з об'єкта книги.

// №1
const book = {
   title: "The Colony",
   author: "Max Kidruk",
   year: 2023,
}

// №2 
book.genre = "science fiction";

// №3
delete book.year;
