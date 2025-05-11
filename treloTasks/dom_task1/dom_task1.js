"use strict";
// Завдання 1:

// Реалізуйте інтерфейс календаря з можливістю:

// Вибору дати.

// Перегляду подій на вибрану дату.

// Додавання нових подій до вибраної дати.

// Видалення подій з вибраної дати.

// Вимоги:

// Використовуйте методи document.createElement, appendChild, addEventListener для створення елементів календаря та подій.

// Забезпечте динамічне оновлення списку подій при виборі дати.

// Зберігайте події в LocalStorage, щоб вони зберігались між перезавантаженнями сторінки.

// Підказка:

// Створіть структуру календаря з таблицею або списком, де кожна дата є окремим елементом. При натисканні на дату відображайте список подій для цієї дати та форму для додавання нових подій.

const currentDateEvents = document.querySelector(".current-date");
const curentMonthCalendar = document.querySelector(
  ".calendar-container__title"
);
const prevButton = document.querySelector(".prev");
const nextButton = document.querySelector(".next");
const calendar = document.querySelector(".calendar-container__table");
const input = document.querySelector("input");
const buttonAdd = document.querySelector(".button-add");
const list = document.querySelector("ul");

const events = JSON.parse(localStorage.getItem("events")) || {};
const currentDate = new Date();
const weekDays = ["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс"];

function updateCalendarTitle() {
  const month = currentDate.toLocaleDateString("uk-UA", {
    month: "long",
  });
  const year = currentDate.getFullYear();
  curentMonthCalendar.textContent = `${month} ${year}`;
}

function renderCalendar() {
  const monthNum = currentDate.getMonth();
  const year = currentDate.getFullYear();
  const daysInMonth = new Date(year, monthNum + 1, 0).getDate();
  const startDay = new Date(year, monthNum, 1).getDay();
  let html =
    "<tr>" + weekDays.map((d) => `<th>${d}</th>`).join("") + "</tr><tr>";
  let day = 1;
  let dayOfWeek = startDay === 0 ? 6 : startDay - 1;

  for (let i = 0; i < dayOfWeek; i++) html += "<td></td>";
  for (; day <= daysInMonth; day++) {
    html += `<td>${day}</td>`;
    dayOfWeek++;
    if (dayOfWeek % 7 === 0 && day != daysInMonth) html += "</tr><tr>";
  }
  html += "</tr>";
  calendar.innerHTML = html;

  document.querySelectorAll("td").forEach((td) => {
    td.addEventListener("click", () => {
      document.querySelectorAll("td").forEach((cell) => {
        cell.classList.remove("td-click");
      });
      td.classList.add("td-click");
      const selectedDate = `${td.textContent} ${curentMonthCalendar.textContent}`;
      onDateChange(selectedDate);
    });
  });
}

prevButton.addEventListener("click", () => {
  currentDate.setMonth(currentDate.getMonth() - 1);
  updateCalendarTitle();
  renderCalendar();
});

nextButton.addEventListener("click", () => {
  currentDate.setMonth(currentDate.getMonth() + 1);
  updateCalendarTitle();
  renderCalendar();
});

function renderEventsForDate(dateStr) {
  list.innerHTML = "";
  const items = events[dateStr] || [];
  items.forEach((event, index) => {
    const li = document.createElement("li");
    li.textContent = event;

    const closeButton = document.createElement("button");
    closeButton.textContent = "✕";
    closeButton.classList.add("close-button");
    closeButton.style.backgroundColor = "gray";
    closeButton.style.position = "relative";
    closeButton.style.right = "-180px";
    closeButton.style.top = "-20px";
    closeButton.addEventListener("click", () => {
      events[dateStr].splice(index, 1);
      localStorage.setItem("events", JSON.stringify(events));
      renderEventsForDate(dateStr);
    });

    list.appendChild(li);
    list.appendChild(closeButton);
  });
}

buttonAdd.addEventListener("click", (e) => {
  e.preventDefault();
  const event = input.value.trim();
  if (!event) return;

  const dateKey = currentDateEvents.textContent;

  if (!events[dateKey]) {
    events[dateKey] = [];
  }

  events[dateKey].push(event);
  localStorage.setItem("events", JSON.stringify(events));

  renderEventsForDate(dateKey);
  input.value = "";
});

function onDateChange(newDateText) {
  currentDateEvents.textContent = newDateText;
  renderEventsForDate(newDateText);
}

renderEventsForDate(currentDateEvents.textContent);

const nowDate = new Date().toLocaleDateString("uk-UA", {
  day: "numeric",
  month: "long",
  year: "numeric",
});

currentDateEvents.textContent = nowDate;

updateCalendarTitle();
renderCalendar();
renderEventsForDate(currentDateEvents.textContent);
