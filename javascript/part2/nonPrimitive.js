const obj = {
  name: "Aquib Ansari",
  age: 25,
};
obj["Last name"] = "Kashif";
obj.name = "Ahmed Ansari";
obj.Occupation = "ML Engineer";
console.log(obj.name);
console.log(obj.Occupation);
console.log(obj);

console.log(typeof obj);

// let today = new Date();
// console.log(today.getDay());

// let heros = new Array();
// console.log(typeof heros);

let heros = ["a", "b", "cd", "ef"];
console.log(heros[0]);

let isValue = "2abc";
console.log(Number(isValue));
console.log(Number(null));
console.log(typeof String(null));
