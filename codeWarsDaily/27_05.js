// There is a queue for the self-checkout tills at the supermarket. Your task is write a function to calculate the total time required for all the customers to check out!

// input
// customers: an array of positive integers representing the queue. Each integer represents a customer, and its value is the amount of time they require to check out.
// n: a positive integer, the number of checkout tills.
// output
// The function should return an integer, the total time required.

"use strict";
function queueTime(customers, n) {
  let queues = new Array(n).fill(0);

  for (let i = 0; i < customers.length; i++) {
    let time = customers[i];
    let minIndex = queues.indexOf(Math.min(...queues));
    queues[minIndex] += time;
  }
  return Math.max(...queues);
}
