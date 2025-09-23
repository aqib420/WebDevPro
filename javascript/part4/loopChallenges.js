/* 
1. Write a `while` loop that calculates the sum of all numbers from 1 to 5 and stores the result in a variable named `sum`.
*/
let sum = 0;
let n = 1;
while (n < 6) {
  sum = sum + n;
  n++;
}
console.log(sum);

/* 
2. Write a `while` loop that counts down from 5 to 1 and stores the numbers in an array named `countdown`.
*/

let i = 5;
let arr1 = new Array();
while (i > 0) {
  arr1.push(i);
  i--;
}
console.log(arr1);
/* 
3. Write a `do while` loop that prompts a user to enter their favorite tea type until they enter `"stop"`. 
   Store each tea type in an array named `teaCollection`.
*/
// let teaCollection = new Array();
// let tea;
// do {
//   tea = prompt(`Enter your favourite tea (type "stop" to finish)`);
//   if (tea !== "stop") {
//     teaCollection.push(tea);
//   }
// } while (tea !== "stop");
// console.log(teaCollection);

/* 
4. Write a `do while` loop that adds numbers from 1 to 3 and stores the result in a variable named `total`.
*/
total = 0;
i = 1;
do {
  total += i;
  i++;
} while (i < 4);
console.log(total);

/* 
5. Write a `for` loop that multiplies each element in the array `[2, 4, 6]` by 2 and stores the results in a 
new array named `multipliedNumbers`.
*/
let arr2 = [2, 4, 6];
let multipliedNumbers = [];
for (let i = 0; i < arr2.length; i++) {
  multipliedNumbers.push(arr2[i] * 2);
}
console.log(multipliedNumbers);

/* 
6. Write a `for` loop that lists all the cities in the array 
`["Paris", "New York", "Tokyo", "London"]` and stores each city in a new array named `cityList`.
*/
let cities = ["Paris", "New York", "Tokyo", "London"];
let cityList = [];
for (let i = 0; i < cities.length; i++) {
  const city = cities[i];
  cityList.push(city);
}
console.log(cityList);
