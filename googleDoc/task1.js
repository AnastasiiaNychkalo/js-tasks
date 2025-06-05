"use strict";
// Завдання: Створення Інтерактивної Гри на JavaScript
// Опис Завдання
// Створи просту текстову гру на JavaScript, де гравці та об'єкти гри (наприклад, монстри, предмети) представлені як об'єкти. Кожен об'єкт має свої властивості та методи для взаємодії в грі.

// Структура Об'єктів
// Гравець (Player)
// Властивості: ім'я, здоров'я, сила, ліки
// Методи: атакувати, лікуватися
// Монстр (Monster)
// Властивості: вид, здоров'я, сила
// Методи: атакувати
// Предмет (Item)
// Властивості: назва, тип (наприклад, зброя, ліки), ефект

// Логіка Гри
// Гравець може зустрічати різних монстрів та знаходити предмети.
// В бою гравець та монстр по черзі атакують один одного.
// Гравець може використовувати предмети для покращення своїх характеристик або лікування.
// Гра закінчується, коли здоров'я гравця досягає нуля.

// Завдання
// Створи Об'єкти: Визнач об'єкти для гравця, монстрів та предметів з відповідними властивостями та методами.
// Реалізуй Логіку Бою: Створи логіку для бою між гравцем та монстром, включаючи взаємні атаки та використання предметів.
// Інтерфейс Користувача: Реалізуй простий текстовий інтерфейс для взаємодії гравця з грою (наприклад, вибір дій, відображення статусу гравця та монстра).
// Логіка Гри: Створи основну логіку гри, яка включає створення гравця, зустрічі з Монстрами, знаходження предметів та умови завершення гри.

// Додатково
// Додай систему рівнів для гравця, де з кожним рівнем зростають його характеристики.
// Введи різноманітність монстрів з унікальними властивостями та атаками.
// Реалізуй систему інвентаря, де гравець може зберігати та використовувати знайдені предмети.

const player = {
  name: "Player",
  health: 100,
  strength: 100,
  medicine: [],
  inventory: [],
  level: 1,
  attack: function attack(enemy) {
    alert(`${this.name} атакує ${enemy.kind} на ${this.strength} урону.`);
    enemy.health -= this.strength;
  },
  heal: function heal() {
    if (this.medicine.length > 0) {
      this.health += 10;
      this.medicine.shift();
      alert(`${this.name} лікується. Поточне здоровʼя: ${this.health}`);
    } else {
      alert("У вас немає ліків!");
    }
  },
};

function createMonster(kind, health, strength) {
  return {
    kind,
    health,
    strength,
    attack(enemy) {
      alert(`${this.kind} атакує ${enemy.name} на ${this.strength} урону.`);
      enemy.health -= this.strength;
    },
  };
}

function createItem(name, type) {
  return {
    name,
    type,
    effect(player) {
      if (type === "weapon") {
        player.strength += 5;
        alert("Сила збільшена на 5.");
      } else {
        player.medicine.push(name);
      }
    },
  };
}

function battle(monster) {
  while (player.health > 0 && monster.health > 0) {
    player.attack(monster);
    if (monster.health <= 0) {
      alert(`${monster.kind} переможено!`);
      player.level++;
      player.strength += 2;
      alert(`Рівень підвищено! Тепер рівень: ${player.level}`);
      break;
    }
    monster.attack(player);
    if (player.health <= 0) {
      alert(`${player.name} загинув.`);
      return;
    }
  }
}

function playTurn(currentMonster) {
  const action = prompt("Що ви хочете зробити? (атака/лікування/предмет)");
  if (action === "атака") {
    battle(currentMonster);
  } else if (action === "лікування") {
    player.heal();
    battle(currentMonster);
  } else if (action === "предмет") {
    if (player.inventory.length > 0) {
      player.inventory[0].effect(player);
      player.inventory.shift();
    } else {
      alert("Предметів немає");
    }
    battle(currentMonster);
  }
}

const monster = [
  createMonster("Blip", 30, 5),
  createMonster("Gog", 50, 10),
  createMonster("Klagg", 200, 15),
];

function randomMonster() {
  const index = Math.floor(Math.random() * monster.length);
  return monster[index];
}

const item = [
  createItem("Зілля", "weapon"),
  createItem("pills", "med"),
  createItem("knife", "weapon"),
];

function randomItem() {
  const index = Math.floor(Math.random() * item.length);
  return item[index];
}

function gameLoop() {
  const name = prompt("Як тебе звати?");
  player.name = name;
  alert("Гра почалась!");
  playTurn();
  while (player.health > 0) {
    const meet = Math.floor(Math.random() * 10) + 1;

    if (meet > 6) {
      const currentMonster = randomMonster();
      alert(`Ви зутсріли ${currentMonster.kind}.`);
      playTurn(currentMonster);
      // battle(currentMonster);
    } else {
      const findItem = randomItem();
      alert(`Ви знайшли ${findItem.name}`);
      createItem(findItem);
    }
  }
  alert("Гру завершено.Ваш рівень: ${player.level}`");
}

gameLoop();
