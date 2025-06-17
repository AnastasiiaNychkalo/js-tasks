"use strict";
// Write function RemoveExclamationMarks which removes all exclamation marks from a given string.

function removeExclamationMarks(s) {
  return s
    .split("")
    .filter((val) => val != "!")
    .join("");
  //return s.replace(/!/g, '');
}

// Write Number in Expanded Form
// You will be given a number and you will need to return it as a string in Expanded Form. For example:

//    12 --> "10 + 2"
//    45 --> "40 + 5"
// 70304 --> "70000 + 300 + 4"
// NOTE: All numbers will be whole numbers greater than 0.

// If you liked this kata, check out part 2!!

function expandedForm(num) {
  let st = String(num).split("");
  let result = [];
  for (let i = 0; i < st.length; i++) {
    if (st[i] != "0") {
      result.push(st[i].padEnd(st.length - i, "0"));
    }
  }
  return result.join(" + ");
}

// Task:
// Given a list of integers, determine whether the sum of its elements is odd or even.

// Give your answer as a string matching "odd" or "even".

// If the input array is empty consider it as: [0] (array with a zero).

// Examples:
// Input: [0]
// Output: "even"

// Input: [0, 1, 4]
// Output: "odd"

// Input: [0, -1, -5]
// Output: "even"
// Have fun!

function oddOrEven(array) {
  const sum = array.reduce((acc, val) => {
    return acc + val;
  }, 0);
  if (sum % 2 === 0) {
    return "even";
  } else {
    return "odd";
  }
}

//return arr.reduce((a,b)=>a+b,0) % 2 ? 'odd' : 'even';