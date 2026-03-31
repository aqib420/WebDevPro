//module import file in js;

//not default import - named function/import
import { add, subtract } from "./mathOperationsM.js";
//default import
import multiply from "./mathOperationsM.js";

console.log(multiply(2, 4));
console.log(add(3, 4));
console.log(subtract(5, 2));

