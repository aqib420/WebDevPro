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
Animal.prototype.sound = function () {
  return `${this.species} makes a sound`;
};

Array.prototype.aquib = function () {
  return `custom method ${this}`;
};
let myArr = [1, 2, 3, 4];
console.log(myArr.aquib);
let myNewArr = [1, 2, 3, 4, 5, 6];

console.log(myNewArr.aquib);

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

let myCar = new Car("honda", "accord");
console.log(myCar.drive());
console.log(myCar.start());
