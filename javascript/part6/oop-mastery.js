// let car = {
//   make: "toyota",
//   model: "camry",
//   year: 2020,
//   start: function () {
//     return `${this.model} was first released in ${this.year}`;
//   },
// };
// console.log(car);
// console.log(car.start());

function Animal(type, species) {
  this.type = type;
  this.species = species;
}

// Animal.prototype.sound = function () {
//   return `${this.species} makes a sound`;

// Array.prototype.aquib = function () {
//   return `custom method ${this}`;
// };
// let myArr = [1, 2, 3, 4];
// console.log(myArr.aquib);
// let myNewArr = [1, 2, 3, 4, 5, 6];

// console.log(myNewArr.aquib);

class Vehicle {
  constructor(make, model) {
    this.make = make;
    this.model = model;
  }
  start() {
    return `${this.model} is from ${this.make}`;
  }
}

class Car extends Vehicle {
  drive() {
    return `${this.model} is AWD, example of inheritance`;
  }
}

let myCar = new Car(6, "autoamtic");
console.log(myCar.drive());
console.log(myCar.start());

//Encapsulation (meaning i want to restrict the use of it to object data)
class BankAccount {
  constructor(parameters) {}
  #balance = 0;
  deposit(amount) {
    this.#balance += amount;
  }
  getBalance() {
    return `$${this.#balance}`;
  }
}

let myAccount = new BankAccount();
myAccount.deposit(500);
myAccount.deposit(250);
console.log(myAccount.getBalance());

//Abstraction
class CoffeeMachine {
  start() {
    //call DB
    //filter value
    return `starting machine...`;
  }
  brewCoffee() {
    //do some complex calculations
    return `Brewing coffee for user`;
  }
  pressStartButton() {
    let msg1 = this.start();
    let msg2 = this.brewCoffee();
    return `${msg1} followed by, ${msg2}`;
  }
}

let myMachine = new CoffeeMachine();
// console.log(myMachine.brewCoffee());
// console.log(myMachine.start());
console.log(myMachine.pressStartButton());

//Polymorphism; can take more than one form;
class Bird {
  fly() {
    return `Flying...`;
  }
}

class Penguin extends Bird {
  fly() {
    return `I dont fly!`;
  }
}

let myBird = new Bird();
let myPenguin = new Penguin();
console.log(myBird.fly());
console.log(myPenguin.fly());

//static
class Calculator {
  static add(a, b) {
    return a + b;
  }
}

let myCalc = new Calculator();
// console.log(myCalc.add()); //error
console.log(Calculator.add(3, 4));
