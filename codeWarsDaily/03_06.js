"use strict";
// ROT13 is a simple letter substitution cipher that replaces a letter with the letter 13 letters after it in the alphabet. ROT13 is an example of the Caesar cipher.

// Create a function that takes a string and returns the string ciphered with Rot13. If there are numbers or special characters included in the string, they should be returned as they are. Only letters from the latin/english alphabet should be shifted, like in the original Rot13 "implementation".

function rot13(message) {
  result = [];
  for (let char of message) {
    if (char.match(/[A-Z]/)) {
      result.push(
        String.fromCharCode(((char.charCodeAt(0) - 65 + 13) % 26) + 65)
      );
    } else if (char.match(/[a-z]/)) {
      result.push(
        String.fromCharCode(((char.charCodeAt(0) - 97 + 13) % 26) + 97)
      );
    } else {
      result.push(char);
    }
  }
  return result.join("");
}

// Welcome.

// In this kata you are required to, given a string, replace every letter with its position in the alphabet.

// If anything in the text isn't a letter, ignore it and don't return it.

// "a" = 1, "b" = 2, etc.

// Example
// Input = "The sunset sets at twelve o' clock."
// Output = "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11"

function alphabetPosition(text) {
  let result = text
    .toLowerCase()
    .split("")
    .map((val) => {
      if (val.match(/[a-z]/)) {
        return val.charCodeAt(0) - 96;
      }
    })
    .filter(Boolean);
  return result.join(" ");
}
