"use strict";
// let fname = 'John';
Object.defineProperty(exports, "__esModule", { value: true });
// fname = 10;
let lname;
lname = "Santosh";
let newname = lname.toUpperCase();
console.log(newname);
let age;
age = 25.5;
let result = parseInt("25");
console.log("25");
let isValid = false;
console.log(isValid);
let empList;
empList = ["Santosh", "Santosh1", "Santosh2"];
let numList = [1, 2, 3, 4, 5];
let results = numList.filter((num) => num > 2);
console.log(results);
let result2 = numList.find((num) => num === 2);
console.log(result2);
let sum = numList.reduce((a, b) => a + b);
console.log(sum);
let c = 1 /* Color.Green */;
//tuples
let swapNumbs;
function swapNumbers(num1, num2) {
    return [num2, num1];
}
console.log(swapNumbers(3, 2));
let dept;
dept = "IT";
dept = 2;
//# sourceMappingURL=datatypes.js.map