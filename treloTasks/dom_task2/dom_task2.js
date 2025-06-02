"use strict";

const buttonAdd = document.querySelector(".add");
const input = document.querySelector("input");
const ul = document.querySelector(".task-list");
const filterAll = document.querySelector(".button-all");
const filterDone = document.querySelector(".button-done");
const filterActive = document.querySelector(".button-active");

let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

let currentId = tasks.length ? Math.max(...tasks.map((t) => t.id)) : 0;

renderTasks(tasks);

buttonAdd.addEventListener("click", (e) => {
  e.preventDefault();
  const text = input.value.trim();

  if (!text) {
    alert("Please, input your task.");
    return;
  }

  currentId += 1;
  const newTask = { id: currentId, task: text, status: "active" };
  tasks.push(newTask);
  updateStorage();
  renderTasks(tasks);
  input.value = "";
});

function renderTasks(taskArray) {
  ul.innerHTML = "";
  taskArray.forEach((task) => {
    const li = document.createElement("li");
    li.textContent = task.task;
    li.classList.add(task.status, "all");

    const buttonDone = document.createElement("button");
    buttonDone.classList.add("li__button-done");
    const imgDone = document.createElement("img");
    imgDone.src = "/treloTasks/dom_task2/done.png";
    imgDone.alt = "Done";
    buttonDone.appendChild(imgDone);

    buttonDone.addEventListener("click", () => {
      task.status = "done";
      updateStorage();
      renderTasks(tasks);
    });

    const buttoneDelete = document.createElement("button");
    buttoneDelete.classList.add("li__button-delete");
    const imgDelete = document.createElement("img");
    imgDelete.src = "/treloTasks/dom_task2/waste.png";
    imgDelete.alt = "Waste";
    buttoneDelete.appendChild(imgDelete);

    buttoneDelete.addEventListener("click", () => {
      tasks = tasks.filter((t) => t.id !== task.id);
      updateStorage();
      renderTasks(tasks);
    });

    li.appendChild(buttonDone);
    li.appendChild(buttoneDelete);
    ul.appendChild(li);
  });
}

function updateStorage() {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

filterAll.addEventListener("click", () => {
  renderTasks(tasks);
  filterAll.classList.toggle("show");
  filterDone.classList.remove("show");
  filterActive.classList.remove("show");
});

filterDone.addEventListener("click", () => {
  const doneTasks = tasks.filter((task) => task.status === "done");
  filterAll.classList.remove("show");
  filterActive.classList.remove("show");
  filterDone.classList.toggle("show");
  renderTasks(doneTasks);
});

filterActive.addEventListener("click", () => {
  const activeTasks = tasks.filter((task) => task.status === "active");
  filterAll.classList.remove("show");
  filterDone.classList.remove("show");
  filterActive.classList.toggle("show");
  renderTasks(activeTasks);
});
