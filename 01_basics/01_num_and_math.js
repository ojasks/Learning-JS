const score = 40
const balance = new Number(100) // now the numbef will be always positive
// console.log(balance)
// console.log(balance.toString())// now becomes a string and gaind the prop. of string
// console.log(balance.toFixed(2))

const anothernum = 23.8966
// console.log(anothernum.toPrecision(3))

const hundreds = 10000000
// console.log(hundreds.toLocaleString())
// console.log(hundreds.toLocaleString('en-IN'))

 //*************************************** Math ************************************/
// console.log(Math)
//abs
//round
// console.log(Math.min(4,3,6,8))
// console.log(Math.random()) //will always give values between 0 and 1
// console.log((Math.random()*10)+1)
// console.log(Math.floor(Math.random()*10)+1)  // values 1 - 9 ke beech me dega


const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min)
// (max - min + 1 ) gives me the range
