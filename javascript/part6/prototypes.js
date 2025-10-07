let computer = {
  cpu: 12,
  ram: 13,
};
let lenovo = {
  cpu: 15,
  __proto__: computer,
};
console.log(lenovo.__proto__, lenovo);

let car = {
  tyres: 4,
};
let tesla = {
  driver: "AI",
};
Object.setPrototypeOf(tesla, car);
console.log(Object.getPrototypeOf(tesla));
console.log(tesla.hasOwnProperty("tyres"));
