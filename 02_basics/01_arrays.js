// array

const myarr = [0,1,2,3,4,5] // here arrays are resizable and can have elements of different data type
// console.log(myarr[3])
//array copy operations create shallow copies// meaning copy also share the same reference point
//deep copy // do not share the same reference
const myarr2 =new Array(1,2,3)

// //Array Methods
// myarr.push(6)
// console.log(myarr)
// myarr.pop() // just removes the last value 
// // myarr.unshift(8) // shifts all the values one step to right and gets placed first
// // // if array has many elements it becomes time consuming
// console.log(myarr.includes(9))
// myarr.shift()// shifts everything one step left 
// console.log(myarr)
// const newarr = myarr.join() // here the type is changed to string 
// console.log(newarr)
// console.log(myarr)
// console.log(typeof newarr)

//slice and splice
console.log("A ", myarr) // A  [ 0, 1, 2, 3, 4, 5 ]
const myn1 = myarr.slice(1,3)
console.log(myn1) // [ 1, 2 ]
console.log("B ", myarr) // B  [ 0, 1, 2, 3, 4, 5 ]

const myn2 = myarr.splice(1,3) // removes 1,2,3 from the array
console.log(myn2) //[ 1, 2, 3 ]
console.log("C ", myarr) //C  [ 0, 4, 5 ]

// now dont say the difference is that the range is not included ❌
//splice removes the particular portion from that array whilw 
