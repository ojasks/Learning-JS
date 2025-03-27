// kis tarah se data ko memory me rakha jaata hai aur access kiya jaata hai 
// uss hisaab se data ke do types hai
//1. Primitive 2. Non Primitive

//JavaScript is a dynamic language and not static, which means that variables can hold values of different types during runtime

//Primitive
// call by value : we get a copy of these values and all changes happen in these copies 
// 7 types: String , Number , Boolean, null, undefined , Symbol, BigInt

//Reference (NoN Primitive)
//these are the values whose reference can be directly allocated in the memory
// to master js master // OBJECTS  // WEB EVENTS OF A BROWSER
// Array, Objects , Functions

const id = Symbol("123")
const anotherId = Symbol("123")
// Symbol data types works in a way that even if you pass the same value, the resultant values will be different
console.log(id === anotherId)

// to represent bigint number put n at the end of the values
const bignumber=3456543576654356754n
const heroes = ["brambedkar","bhagatsingh","porus"];
let myObj = {  
    name: "ojas",
    age: 20,
}

const myFunc = function(){
    console.log("Hello World")
}

console.log(typeof myFunc)