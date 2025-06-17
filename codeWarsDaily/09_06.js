"use strict";
// Now you have to write a function that takes an argument and returns the square of it.

const square = (num) => num ** 2;

// Complete the function that takes two integers (a, b, where a < b) and return an array of all integers between the input parameters, including them.

function between(a, b) {
  let result = [];
  for (let i = a; i <= b; i++) {
    result.push(i);
  }
  return result;
}

function between(a, b) {
  return (result = Array(b - (a - 1))
    .fill(a)
    .map((val) => a++));
}

// Debugging sayHello function
// The starship Enterprise has run into some problem when creating a program to greet everyone as they come aboard. It is your job to fix the code and get the program working again!

// Example output:

// Hello, Mr. Spock

function sayHello(name) {
  return `Hello, ${name}`;
}

// Given an array (arr) as an argument complete the function countSmileys that should return the total number of smiling faces.

// Rules for a smiling face:

// Each smiley face must contain a valid pair of eyes. Eyes can be marked as : or ;
// A smiley face can have a nose but it does not have to. Valid characters for a nose are - or ~
// Every smiling face must have a smiling mouth that should be marked with either ) or D
// No additional characters are allowed except for those mentioned.

// Valid smiley face examples: :) :D ;-D :~)
// Invalid smiley faces: ;( :> :} :]

// Example
// countSmileys([':)', ';(', ';}', ':-D']);       // should return 2;
// countSmileys([';D', ':-(', ':-)', ';~)']);     // should return 3;
// countSmileys([';]', ':[', ';*', ':$', ';-D']); // should return 1;
// Note
// In case of an empty array return 0. You will not be tested with invalid input (input will always be an array). Order of the face (eyes, nose, mouth) elements will always be the same.

function countSmileys(arr) {
  const result = arr.filter((val) => {
    return (
      (val[0] === ":" || val[0] === ";") &&
      (val[1] === "-" || val[1] === "~" || val[1] === ")" || val[1] === "D") &&
      (val[2] === ")" || val[2] === "D" || val[2] === undefined)
    );
  });
  return result.length;
}
