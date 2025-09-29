// let fname = 'John';

// fname = 10;
let lname : string;

lname = "Santosh"
let newname = lname.toUpperCase();
console.log(newname);

let age: number;
age=25.5;

let result = parseInt("25")
console.log("25")

let isValid : boolean = false;
console.log(isValid);

let empList : string[];

empList = ["Santosh","Santosh1","Santosh2"]
let numList: number[] = [1,2,3,4,5];

let results = numList.filter((num)=> num>2);
console.log(results);

let result2 = numList.find((num) => num===2)
console.log(result2);
let sum = numList.reduce((a,b) => a+b);
console.log(sum);
//enums
const enum Color { ///  <-- doubt 1:03:09
  Red,
  Green,
  Blue
}

let c: Color = Color.Green;
//tuples
let swapNumbs : [firstNumber : number, secondNumber : number];

function swapNumbers(num1 :number, num2 : number) : [number,number]{
    return [num2,num1];
}
console.log(swapNumbers(3,2));
let dept : any;
dept = "IT";
dept = 2;