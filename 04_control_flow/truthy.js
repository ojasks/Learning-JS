// const usermail = "ojasgoogle.com"
// if(usermail){
//     console.log("got user email")
// } else {
//     console.log("doesn't have user email")
// }
//will evaluate to true by default when not compared to any other thing



// const usermail = []
// if(usermail){
//     console.log("got user email")
// } else {
//     console.log("doesn't have user email")
// }
// //will evaluate true for this one too


//falsy values
// false, 0, -0,  BigInt 0n, "", null, undefined, NaN

//truthy values
// "0", 'false', " ", [], {}, function(){}
// empty array,empty object,0 in commas,false in commas,commas with space inside them, also empty function


// const emptyobj = {}
// if(Object.keys(emptyobj).length === 0){
//      console.log("Object is empty")
// } => Object is empty
// Object.keys(emptyobj) => will return an array

//false == 0 //=>true
//false =="" //true
// 0 == '' //true

//NUllish Coalescing operator (??); null undefined

let val1;
// val1 = 5 ?? 10    //=>5
// val1 = null ?? 10 // basically it is a safety checker for null   //=>10
// val1 = undefined ?? 15    //=>15
 val1 = null ?? 10 ?? 15 // first value after null
console.log(val1)


//Terniary Operator
//  condition ? true : false
 const iceprice = 100
iceprice >= 80 ? console.log("true") : console.log("false")
