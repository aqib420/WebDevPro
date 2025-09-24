/* 
1. Write a `for` loop that loops through the array 
`["green tea", "black tea", "chai", "oolong tea"]` and stops the loop when it finds `"chai"`. 
   Store all teas before `"chai"` in a new array named `selectedTeas`.
*/
let teas = ["green tea", "black tea", "chai", "oolong tea"];
let selectedTeas = new Array();

for (let i = 0; i < teas.length; i++) {
  if (teas[i] === "chai") {
    break;
  }
  selectedTeas.push(teas[i]);
}
console.log(selectedTeas);

/* 
2. Write a `for` loop that loops through the array `["London", "New York", "Paris", "Berlin"]` and skips `"Paris"`. 
   Store the other cities in a new array named `visitedCities`.
*/
let countries = ["London", "New York", "Paris", "Berlin"];
let visitedCities = [];
for (let i = 0; i < countries.length; i++) {
  if (countries[i] === "Paris") {
    continue;
  }
  visitedCities.push(countries[i]);
}
console.log(visitedCities);

/* 
3. Use a `for-of` loop to iterate through the array `[1, 2, 3, 4, 5]` and stop when the number `4` is found. 
   Store the numbers before `4` in an array named `smallNumbers`.
*/
let myNumbers = [1, 2, 3, 4, 5];
let smallNumbers = [];
for (const num of myNumbers) {
  if (num === 4) {
    break;
  }
  smallNumbers.push(num);
}
console.log(smallNumbers);

/* 
4. Use a `for-of` loop to iterate through the array `["chai", "green tea", "herbal tea", "black tea"]` and skip `"herbal tea"`. 
   Store the other teas in an array named `preferredTeas`.
*/

let myChai = ["chai", "green tea", "herbal tea", "black tea"];
let preferredTeas = [];
for (const i of myChai) {
  if (i === "herbal tea") {
    continue;
  }
  preferredTeas.push(i);
}
console.log(preferredTeas);

/* 
5. Use a `for-in` loop to loop through an object containing city populations. 
   Stop the loop when the population of `"Berlin"` is found and 
   store all previous cities' populations in a new object named `cityPopulations`.

   let citiesPopulation = {
    "London": 8900000,
    "New York": 8400000,
    "Paris": 2200000,
    "Berlin": 3500000
};

*/
let citiesPopulation = {
  London: 8900000,
  "New York": 8400000,
  Paris: 2200000,
  Berlin: 3500000,
};
let cityPopulations = new Object();
// console.log(Object.keys(citiesPopulation));
for (const i in citiesPopulation) {
  //   console.log(citiesPopulation[i]);

  if (i === "Berlin") {
    break;
  }
  // key = value;
  cityPopulations[i] = citiesPopulation[i];
}
console.log(cityPopulations);

/* 
6. Use a `for-in` loop to loop through an object containing city populations. 
   Skip any city with a population below 3 million and store the rest in a new object named `largeCities`.

let worldCities = {
    "Sydney": 5000000,
    "Tokyo": 9000000,
    "Berlin": 3500000,
    "Paris": 2200000
};
*/

let worldCities = {
  Sydney: 5000000,
  Tokyo: 9000000,
  Berlin: 3500000,
  Paris: 2200000,
};
let largeCities = {};
for (const key in worldCities) {
  if (worldCities[key] < 3000000) {
    continue;
  }
  largeCities[key] = worldCities[key];
}
console.log(largeCities);

/* 
7. Write a `forEach` loop that iterates through the 
array `["earl grey", "green tea", "chai", "oolong tea"]`. 
Stop the loop when `"chai"` is found, 
and store all previous tea types in an array named `availableTeas`.
*/

let chais = ["earl grey", "green tea", "chai", "oolong tea"];
let availableTeas = [];
chais.forEach(function (i) {
  if (i === "chai") {
    return;
  }
  availableTeas.push(i);
});
console.log(availableTeas);

/* 
8. Write a `forEach` loop that iterates through the array `["Berlin", "Tokyo", "Sydney", "Paris"]`. 
   Skip `"Sydney"` and store the other cities in a new array named `traveledCities`.
*/

let arr1 = ["Berlin", "Tokyo", "Sydney", "Paris"];
let traveledCities = [];
arr1.forEach((i) => {
  if (i === "Sydney") {
    return;
  }
  traveledCities.push(i);
});
console.log(traveledCities);

/*
9. Write a `for` loop that iterates through the array `[2, 5, 7, 9]`. 
   Skip the value `7` and multiply the rest by 2. Store the results in a new array named `doubledNumbers`.
*/
let numbers = [2, 5, 7, 9];
let doubleNumbers = new Array();
for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] === 7) {
    continue;
  }
  doubleNumbers.push(numbers[i] * 2);
}
console.log(doubleNumbers);

/* 
10. Use a `for-of` loop to iterate through the array `["chai", "green tea", "black tea", "jasmine tea", "herbal tea"]` 
    and stop when the length of the current tea name is greater than 10. 
    Store the teas iterated over in an array named `shortTeas`.
*/

let arr2 = ["chai", "green tea", "black tea", "jasmine tea", "herbal tea"];
let shortTeas = [];

for (const num of arr2) {
  if (num.length > 10) {
    break;
  }
  shortTeas.push(num);
}
console.log(shortTeas);
