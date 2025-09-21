// Check if a nunber is greater than another number;
let nm1 = 35;
let nm2 = 46;
if (nm1 > nm2) {
  console.log(true);
} else {
  console.log(false);
}

//chceking if a string is equal to another string;
let str1 = "Ajay";
let str2 = "Kumar";

if (str1 == str2) {
  console.log(`They are equal`);
} else {
  console.log(`Well ${str1} is not equal to ${str2}!`);
}
let userName = "Aquib420";
let anotherUsername = "Aqib420";
if (userName == anotherUsername) {
  console.log("pick another username as this already exists!");
} else {
  console.log("You can select this username");
}

//checking if a variable is a number or not;
let num1 = "25";
let num2 = 35;
if (typeof num2 === "number") {
  console.log("This is a number");
} else {
  console.log("Not a number");
}

let bool1 = true;
let bool2 = false;
if (bool2 === true) {
  console.log("Value is true");
} else {
  console.log("value is false");
}

//Checking if an array is empty or not;
let arr1 = [];
if (arr1.length >= 1) {
  console.log("Not empty");
} else {
  console.log("Empty");
}
