// In this kata you will create a function that takes a list of non-negative integers and strings and returns a new list with the strings filtered out.

// Example
// filter_list([1,2,'a','b']) == [1,2]
// filter_list([1,'a','b',0,15]) == [1,0,15]
// filter_list([1,2,'aasf','1','123',123]) == [1,2,123]

"use strict";

function filter_list(l) {
   return l.filter(function(val) {
      return typeof val === 'number';
   });
}

// Коротший варіант
function filter_list (l) {
   return l.filter(val =>  typeof val === 'number');
}

// Given an array of integers.

// Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers. 0 is neither positive nor negative.

// If the input is an empty array or is null, return an empty array.

// Example
// For input [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15], you should return [10, -65].

function countPositivesSumNegatives(input) {
   let amount = 0;
   let sum = 0;

   if (input === null ||input.length == 0) { 
      return [];
   } else {
   for (let i = 0; i < input.length; i++){
      if (input[i] > 0) {
         amount++;
      } else {
         sum += input[i];
      }
   }
   // for (count num of input) {
      // if (num > 0) amount++;
      // else if (num < 0) {
      // sum += num;
      // }
   // }
   }
   return [amount, sum]
}

// Інший варіант рішення
// function countPositivesSumNegatives(input) {
//    if (!Array.isArray(input) || input.length === 0) return [];

//    return input.reduce(
//       ([pos, neg], num) => {
//       if (num > 0) return [pos + 1, neg];
//       if (num < 0) return [pos, neg + num];
//       return [pos, neg];
//       },
//       [0, 0]
//    );
// }