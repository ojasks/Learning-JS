let score = "ojas"; //33  "33"  "33abc" null undefined true false ojas
// console.log(typeof score);
// console.log(typeof (score));

let valueInNumber = Number(score)// if we are only dealing with numeric values 
// console.log(typeof valueInNumber);
// console.log(valueInNumber);// here it shows that "33abc" is converted to a number but it originally is NaN (not a number)

//33 => 33
//"33abc" => NaN // type is number but value is NaN
//true =>1
//

 let isLoggedIn = "ojas" // 1=> true  "" => false  "ojas"=>true
 let booleanIsLoggedIn = Boolean(isLoggedIn)
// console.log(booleanIsLoggedIn);

 let someNumber = 33
let stringNumber = String(someNumber); // ab dikhne me number jaisa hai vaise string ban gya hai
// console.log(stringNumber);j
// console.log(typeof stringNumber);

// ******************************************* Operations ***************************************//
let value = 3
let negvalue = -value
//console.log(negvalue)

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**2);

let str1 = "hello"
let str2 = " ojas"
let str3 = str1 + str2
//console.log(str3);

//here comes the problem
// console.log(1 + "2"); // gives ans 12
// console.log("1" + 2); // gives ans 12
// console.log("1" + 2 + 2); // gives 122 where one thinks that both 2 should have been added which does'nt happen
// console.log(1 + 2 + "2") // this gives 32 now
// console.log((3 +4) * 5 % 3)


// writing plus gives you conversion
//all these are bad practices
// console.log(true) //=> true
// console.log(+true) //=> 1
// // console.log(true+) // =>error
// console.log(+"") //=> 0

let num1, num2, num3
num1 = num2 = num3 =2 + 2 // not a good way

let gameCounter =  100
gameCounter++
++gameCounter
console.log(gameCounter) 









