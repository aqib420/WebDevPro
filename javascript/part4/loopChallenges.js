/* 
1. Write a `while` loop that calculates the sum of all numbers from 1 to 5 and stores the result in a variable named `sum`.
*/
let sum = 0;
let n = 1;
while (n <= 5) {
  sum = sum + n;
  n++;
}
console.log(sum);

/* 
2. Write a `while` loop that counts down from 5 to 1 and stores the numbers in an array named `countdown`.
*/

let i = 5;
let arr1 = new Array();
while (i != 0) {
  arr1.push(i);
  i--;
}
console.log(arr1);
/* 
3. Write a `do while` loop that prompts a user to enter their favorite tea type until they enter `"stop"`. 
   Store each tea type in an array named `teaCollection`.
*/

