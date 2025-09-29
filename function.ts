function add(num1 : number, num2 : number , num3?: number) { ///--> optional parameter
     return num3? num1 + num2 + num3 : num1+ num2;
}

console.log(add(2,3,5));
console.log(add(2,3));

const sub = (num1: number, num2: number,  num3=10) : number => num1 - num2 - num3 //--> default parameter

console.log(sub(4,2));
console.log(sub(4,2,2));

const mult = function (num1 : number, num2: number) : number{
    return num1* num2;
};
console.log(mult(2,3));

function add2(num1 : number, num2 : number, ...num3 : number[]) : number{  ///--> rest parameters
    return num1+num2+num3.reduce((a,b)=> a+b,0);
}

let numbers = [1,2,3,4,5]
console.log(add2(2,3,...numbers))
console.log(add2(6,7,8,9,5,3,2,1))

function getItems<Type>(items : Type[]) : Type[]{
    return new Array<Type>().concat(items);
}

let concatResult = getItems<number>([1,2,3,4,5])

let concatString = getItems<string>(["a","b","c"])

console.log(concatResult);
console.log(concatString);