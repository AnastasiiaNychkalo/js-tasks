"use strict";
// Your task is to write a function which returns the sum of a sequence of integers.

// The sequence is defined by 3 non-negative values: begin, end, step.

// If begin value is greater than the end, your function should return 0. If end is not the result of an integer number of steps, then don't add it to the sum. See the 4th example below.

// Examples

// 2,2,2 --> 2
// 2,6,2 --> 12 (2 + 4 + 6)
// 1,5,1 --> 15 (1 + 2 + 3 + 4 + 5)
// 1,5,3  --> 5 (1 + 4)

const sequenceSum = (begin, end, step) => {
  if (begin > end) {
    return 0;
  }
  const result = [];
  for (let i = begin; i <= end; i += step) {
    result.push(i);
  }
  return result.reduce((acc, current) => {
    return acc + current;
  }, 0);
};

// The cockroach is one of the fastest insects. Write a function which takes its speed in km per hour and returns it in cm per second, rounded down to the integer (= floored).

// For example:

// 1.08 --> 30
// Note! The input is a Real number (actual type is language dependent) and is >= 0. The result should be an Integer.

function cockroachSpeed(s) {
  return Math.trunc(s * 27.78);
}

// After a hard quarter in the office you decide to get some rest on a vacation. So you will book a flight for you and your girlfriend and try to leave all the mess behind you.

// You will need a rental car in order for you to get around in your vacation. The manager of the car rental makes you some good offers.

// Every day you rent the car costs $40. If you rent the car for 7 or more days, you get $50 off your total. Alternatively, if you rent the car for 3 or more days, you get $20 off your total.

// Write a code that gives out the total amount for different days(d).

function rentalCarCost(d) {
  return d >= 7 ? d * 40 - 50 : d >= 3 ? d * 40 - 20 : d * 40;
}

// Implement a pseudo-encryption algorithm which given a string S and an integer N concatenates all the odd-indexed characters of S with all the even-indexed characters of S, this process should be repeated N times.

// Examples:

// encrypt("012345", 1)  =>  "135024"
// encrypt("012345", 2)  =>  "135024"  ->  "304152"
// encrypt("012345", 3)  =>  "135024"  ->  "304152"  ->  "012345"

// encrypt("01234", 1)  =>  "13024"
// encrypt("01234", 2)  =>  "13024"  ->  "32104"
// encrypt("01234", 3)  =>  "13024"  ->  "32104"  ->  "20314"
// Together with the encryption function, you should also implement a decryption function which reverses the process.

// If the string S is an empty value or the integer N is not positive, return the first argument without changes.

function encrypt(text, n) {
  let t = text;
  let odd = [];
  let even = [];
  if (n <= 0 || !text) return text;
  while (n--) {
    for (let i = 0; i < t.length; i++) {
      if (i % 2 === 0) {
        even.push(t[i]);
      } else {
        odd.push(t[i]);
      }
    }
    t = odd.concat(even).join("");
    odd = [];
    even = [];
  }
  return t;
}

function decrypt(encryptedText, n) {
  if (n <= 0 || !encryptedText) return encryptedText;

  let emountOdd = Math.trunc(encryptedText.length / 2);
  let t = encryptedText;

  while (n--) {
    let odd = t.slice(0, emountOdd);
    let even = t.slice(emountOdd);
    let result = [];
    let a = 0;
    let b = 0;
    for (let i = 0; i < encryptedText.length; i++) {
      if (i % 2 === 0) {
        result.push(even[a]);
        a++;
      } else {
        result.push(odd[b]);
        b++;
      }
    }
    t = result.join("");
  }
  return t;
}
