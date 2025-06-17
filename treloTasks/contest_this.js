// Реалізуйте систему бронювання номерів у готелі. Вона повинна дозволяти створювати номери, бронювати номери і виводити інформацію про заброньовані номери. Використовуйте правильне прив'язування контексту this в методах класу.

// Підказка:

// Використовуй bind, call, або apply для прив'язування контексту.
"use strict";

class Hotel {
  constructor() {
    this.rooms = [];
    this.bookings = {};

    this.getBooking = this.getBooking.bind(this);
  }

  addRoom(roomNumber) {
    if (!this.rooms.includes(roomNumber)) {
      this.rooms.push(roomNumber);
    } else {
      console.log(`Номер ${roomNumber} вже існує.`);
    }
  }

  bookRoom(num, name, date) {
    if (!this.rooms.includes(num)) {
      console.log(`Номер ${num} не існує.`);
      return;
    }
    if (this.bookings[num]) {
      console.log(`Номер ${num} вже заброньовано.`);
      return;
    }
    this.bookings[num] = {
      name: name,
      date: date,
    };

    console.log(`Номер ${num} заброньовано на ім'я ${name} на дату ${date}.`);
  }

  getBookings() {
    return this.bookings;
  }
}
