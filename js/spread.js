const max = Math.max(12, 54, 654, 77, 22);
// console.log(max);
const numbers = [34, 64, 111, 777];
const largest = Math.max(...numbers);
// console.log(...numbers);
// console.log(largest);

const numbers2 = [...numbers];
numbers.push(55);
numbers2.push(77);
console.log(numbers);
console.log(numbers2);

const number3 = [...numbers];
const numbers4 = [23, 22, ...numbers, 22];