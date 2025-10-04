//Array and mbuiltin methods challenges
function filterNumbers(arr) {
  return arr.filter((item) => typeof item === "number");
}

function reverseArray(arr) {
  return arr.reverse();
}

function findMax(arr) {
  let max = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
}

function removeDuplicates(arr) {
  return [...new Set(arr)];
}

function flattenArray(arr) {
  return arr.flat(Infinity);
}
//New challenges Loops
function sumOfN(n) {
  let sum = 0;
  for (let i = 0; i < n + 1; i++) {
    sum += i;
  }
  return sum;
}

function printMultiplicationTable(n) {
  const num = Number(n);
  if (Number.isNaN(num)) {
    return [];
  }

  let table = [];
  for (let i = 1; i <= 10; i++) {
    table.push(`${n} * ${i} = ${n * i}`);
  }
  return table;
}

function countVowels(str) {
  let vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
  let count = 0;
  for (let i = 0; i < vowels.length; i++) {
    if (str.includes(vowels[i])) {
      count++;
    }
  }
  return count;
}

//Higher-Order Functions and Arrow Functions
const squareNumbers = (arr) => arr.map((i) => i ** 2);

const filterEvenNumbers = (arr) => arr.filter((i) => i % 2 === 0);

const sumPositiveNumbers = (arr) => {
  let positive = arr.filter((i) => i > 0);
  let sum = positive.reduce((acc, num) => acc + num, 0);
  return sum;
};

const getNames = (arr) => arr.map((obj) => obj.name);

const findLongestWord = (arr) =>
  arr.reduce(
    (longest, word) => (word.length > longest.length ? word : longest),
    ""
  );

//Nested Functions and Context
const person = {
  name: "Hitesh",
  age: 19.5,
  introduce: function () {
    return `Hi, my name is ${this.name} and I am ${this.age} years old`;
  },
};

function outer() {
  function inner() {
    return "Inner function called";
  }
  return inner();
}
