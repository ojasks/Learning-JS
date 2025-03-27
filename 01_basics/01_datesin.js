//mdm
let mydate = new Date()
// console.log(mydate) 
// console.log(mydate.toString()) 
// console.log(mydate.toDateString())
// console.log(mydate.toISOString())
// console.log(mydate.toJSON()) 
// console.log(mydate.toLocaleDateString())   
// console.log(mydate.toLocaleString()) 
// console.log(typeof mydate)

// let createddate = new Date(2025, 0, 28)
// let createddate = new Date(2025, 3, 28, 5, 3)
// let createddate = new Date("2025-01-28") // in dd mm format months start from 1
let createddate = new Date("01-28-2025")
console.log(createddate)
console.log(createddate.toLocaleString())
console.log(createddate.toDateString())// months in js start from 0

let timestamp = Date.now()
// console.log(timestamp)// gives in millisecond
// console.log(createddate.getTime()) // usefull in future to compare// gives in millisecond format
console.log(Math.floor(Date.now()/1000))


 let newdate = new Date()
 console.log(mydate)
 console.log(mydate.getMonth()+1)// added 1 to get the accurate date
 


