//creating a constructor function
function Person(name, age) {
  this.name = name;
  this.age = age;
}
function Car(make, model) {
  this.make = make;
  this.model = model;
}

//creating instance to call our constructor function;
let myCar = new Car("Toyota", "Camry");
console.log(myCar);
let myNewCAr = new Car("Honda", "Civic");
console.log(myNewCAr);

function Tea(type) {
  this.type = type;
  this.describe = function () {
    return `this is a cup of ${this.type}`;
  };
}
let myTea = new Tea("Masala Chai");
console.log(myTea);
console.log(myTea.describe());
console.log(myTea.type);

//prototypes and functions
function Animal(species) {
  this.species = species;
}
Animal.prototype.sound = function () {
  return `${this.species}, gives us a sound`;
};
let myAnimal = new Animal("Dog");
console.log(myAnimal.sound());

//creating a check using throw for using new keyword for creating object/instance;
function Drink(name) {
  if (!new.target) {
    throw new Error(
      "Drink class must be called with new keyword for creating an instance of it"
    );
  }
  this.name = name;
}

let myDrink = Drink("Lassi");
console.log(myDrink);
