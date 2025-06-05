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

class Player {
  constructor(name) {
    this.name = name;
    this.health = 100;
    this.strength = 50;
    this.medicine = [];
    this.inventory = [];
    this.level = 1;
  }

  attack(enemy) {
    alert(`${this.name} атакує ${enemy.kind} на ${this.strength} урону.`);
    enemy.health -= this.strength;
  }

  heal() {
    if (this.medicine.length > 0) {
      this.health += 10;
      if (this.health > 100) this.health = 100;
      this.medicine.pop();
      alert(`${this.name} лікується. Поточне здоровʼя: ${this.health}`);
    } else {
      alert("У вас немає ліків!");
    }
  }

  levelUp() {
    this.level++;
    this.strength += 5;
    this.health = 100;
  }

  status() {
    return `${this.name} | Здоров'я: ${this.health} | Сила: ${this.strength} | Рівень: ${this.level}`;
  }
}

class Monster {
  constructor(kind, health, strength) {
    this.kind = kind;
    this.health = health;
    this.strength = strength;
  }

  attack(enemy) {
    alert(`${this.kind} атакує ${enemy.name} на ${this.strength} урону.`);
    enemy.health -= this.strength;
  }

  takeDamage(amount) {
    this.health -= amount;
  }

  status() {
    return `${this.kind} | Здоров'я: ${this.health} | Сила: ${this.strength}`;
  }
}

class Item {
  constructor(name, type) {
    this.name = name;
    this.type = type;
  }

  effect(player) {
    if (this.type === "weapon") {
      player.strength += 5;
      alert("Сила збільшена на 5.");
    } else if (this.type === "med") {
      player.medicine.push(this);
      alert(`${player.name} отримав ліки ${this.name}`);
    }
  }
}

function battle(player, monster) {
  while (player.health > 0 && monster.health > 0) {
    alert(player.status());
    alert(monster.status());

    const action = prompt(
      "Що ви хочете зробити? (атака/лікування/предмет)"
    ).toLowerCase();

    if (action === "атака") {
      player.attack(monster);
    } else if (action === "лікування") {
      player.heal();
    } else if (action === "предмет") {
      if (player.inventory.length > 0) {
        const item = player.inventory.shift();
        item.effect(player);
      } else {
        alert("Предметів немає");
      }
    } else {
      alert("Невідома команда");
    }

    if (monster.health > 0) {
      monster.attack(player);
    }
  }
  if (player.health <= 0) {
    alert("Ви загинули. Гру завершено.");
    return false;
  } else {
    alert(`Ви перемогли ${monster.kind}!`);
    player.levelUp();
    return true;
  }
}

const monster = [
  new Monster("Blip", 30, 5),
  new Monster("Gog", 50, 10),
  new Monster("Klagg", 200, 100),
];

function randomMonster() {
  const index = Math.floor(Math.random() * monster.length);
  return monster[index];
}

const item = [
  new Item("Зілля", "med"),
  new Item("Кинжал", "weapon"),
  new Item("Сокира", "weapon"),
];

function randomItem() {
  const index = Math.floor(Math.random() * item.length);
  return item[index];
}

function gameStart() {
  const playerName = prompt("Ваше ім'я");
  const player = new Player(playerName);

  alert("Гра починається");

  while (player.health > 0) {
    const encounter = Math.floor(Math.random() * 10) + 1;

    if (encounter < 6) {
      const monster = randomMonster();
      alert(`Ви зустріли монстра ${monster.kind}!`);
      const survived = battle(player, monster);
      if (!survived) break;
    } else {
      const item = randomItem();
      alert(`Ви знайшли предмет: ${item.name}`);
      player.inventory.push(item);
    }
  }
  alert(`Кінець гри. Ваш рівень: ${player.level}`);
}

gameStart();
