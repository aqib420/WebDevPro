function Person(name) {
  this.name = name;
}

Person.prototype.greet = function () {
  console.log(`Hello, from: ${this.name}`);
};

let myName = new Person("Aquib Ansari");
myName.greet();
