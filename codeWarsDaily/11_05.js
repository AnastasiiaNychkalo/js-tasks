"use strict";
// Given a month as an integer from 1 to 12, return to which quarter of the year it belongs as an integer number.

// For example: month 2 (February), is part of the first quarter; month 6 (June), is part of the second quarter; and month 11 (November), is part of the fourth quarter.

// Constraint:

// 1 <= month <= 12

const quarterOf = (month) => {
  return month < 4
    ? 1
    : month > 3 && month < 7
    ? 2
    : month > 6 && month < 10
    ? 3
    : 4;
};

// The main idea is to count all the occurring characters in a string. If you have a string like aba, then the result should be {'a': 2, 'b': 1}.

// What if the string is empty? Then the result should be empty object literal, {}.

function count(string) {
  if (string === "") {
    return {};
  }
  let amount = {};
  for (i = 0; i < string.length; i++) {
    amount[string[i]] = (amount[string[i]] || 0) + 1;
  }
  return amount;
}

// Інший варіант
function count(string) {
  if (string === "") {
    return {};
  }
  let amount = {};
  string.split("").forEach((i) => {
    // можна також forEach змінити на map
    return (amount[i] = (amount[i] || 0) + 1);
  });
  return amount;
}

// In this kata you will create a function that takes in a list and returns a list with the reverse order.

// Examples (Input -> Output)
// * [1, 2, 3, 4]  -> [4, 3, 2, 1]
// * [9, 2, 0, 7]  -> [7, 0, 2, 9]

function reverseList(list) {
  return list.reverse();
}

// Build Tower
// Build a pyramid-shaped tower, as an array/list of strings, given a positive integer number of floors. A tower block is represented with "*" character.

// For example, a tower with 3 floors looks like this:

// [
//   "  *  ",
//   " *** ",
//   "*****"
// ]

function towerBuilder(nFloors) {
  const tower = [];
  const maxWidth = 2 * nFloors - 1;

  for (let i = 1; i <= nFloors; i++) {
    const stars = "*".repeat(2 * i - 1);
    const line = stars.padStart((maxWidth + stars.length) / 2).padEnd(maxWidth);
    tower.push(line);
  }
  return tower;
}
