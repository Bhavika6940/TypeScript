"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function add(num1, num2, num3) {
    return num3 ? num1 + num2 + num3 : num1 + num2;
}
console.log(add(2, 3, 5));
console.log(add(2, 3));
const sub = (num1, num2, num3 = 10) => num1 - num2 - num3; //--> default parameter
console.log(sub(4, 2));
console.log(sub(4, 2, 2));
const mult = function (num1, num2) {
    return num1 * num2;
};
console.log(mult(2, 3));
function add2(num1, num2, ...num3) {
    return num1 + num2 + num3.reduce((a, b) => a + b, 0);
}
let numbers = [1, 2, 3, 4, 5];
console.log(add2(2, 3, ...numbers));
console.log(add2(6, 7, 8, 9, 5, 3, 2, 1));
function getItems(items) {
    return new Array().concat(items);
}
let concatResult = getItems([1, 2, 3, 4, 5]);
let concatString = getItems(["a", "b", "c"]);
console.log(concatResult);
console.log(concatString);
//# sourceMappingURL=function.js.map