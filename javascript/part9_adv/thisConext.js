const person = {
  name: "Aquib",
  greet() {
    console.log(`hello, i am ${this.name}`);
  },
};
person.greet();

// once assigned to another variable
const assignedFunc = person.greet;
assignedFunc();
//Bind to maintain context and not lose contex;
const bindGreet = person.greet.bind({ name: "Yousaf" });
bindGreet();
