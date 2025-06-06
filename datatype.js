/*
// Integer to String Conversion.
let num = 55;
console.log(typeof num);
console.log(num)
let stringNum = String(num);
console.log(typeof stringNum);
console.log(stringNum)

//  String to Integer  Conversion.
let sNum = "44";
console.log(typeof sNum);
console.log(sNum)
let sNumber = Number(sNum);
console.log(typeof sNumber);
console.log(sNumber)

// Conversion in boolean
let isLoggedIn = 1
console.log(typeof isLoggedIn)
console.log(isLoggedIn)
let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(typeof booleanIsLoggedIn)
console.log(booleanIsLoggedIn)
*/

//Primitive 
const score = 100;
const scoreValue = 100.3;
console.log(score);
const isLoggedIn = false;
const outSide = null;

const id = Symbol('123');
const motherId = Symbol('456');

console.log(id==motherId);
const bigNumber = 1236547894n;

//Not Primitive
let obj = {
    name:"Ram",
    age: 25,
}

const myFunction = function(){
    console.log("Hello World..");
}


let firstName = "RAHUL";
let lastName = "VISHWAKARMA";
let roolId = 123;
let myAge = 12;
let subject = "Python";
let roomNo = 124;
console.log(firstName);
console.log(lastName);
console.log(roolId);
console.log(myAge);
console.log(subject);
console.log(roomNo);