const desc = Object.getOwnPropertyDescriptor(Math, 'PI')
// {
//     value: 3.141592653589793,
//     writable: false,
//     enumerable: false,
//     configurable: false
//   }


//is tarah ki properties aap bhi change kar skte ho




// yeh property aapko kuch hidden properties ke baare me btati hai
// console.log(Math.PI) // => 3.141592653589793
// Math.PI = 5
// console.log(Math.PI) // => 3.141592653589793 
// console.log(desc)



const chai = {
    name: "masala chai",
    price: 999,
    available: true,
    orderchai: function(){
        console.log("chai nhi bni")
    }
}
// console.log(chai) //=> { name: 'masala chai', price: 999, available: true }
// console.log(Object.getOwnPropertyDescriptor(chai)) // => undefined //function gives decriptor of properties
//  whereas we give it an object
// console.log(Object.getOwnPropertyDescriptor(chai,"name"))  
// will give 
// {
//     value: 'masala chai',
//     writable: true,
//     enumerable: true,
//     configurable: true 
//   }

Object.defineProperty(chai, 'name', {
    writable : false,
    //enumerable : false
})
// console.log(Object.getOwnPropertyDescriptor(chai,"name")) 
// will give 
// {
//     value: 'masala chai',
//     writable: false,
//     enumerable: false,
//     configurable: true
//   }

// for (let [key,value] of chai) {
//     console.log(`${key} : ${value}`)
// }
// nhi chl rha object(chai) not iterable

for (let [key,value] of Object.entries(chai)) {
   // console.log(`${key} : ${value}`)
}
// gives 
// name : masala chai 
// price : 999
// available : true
//orderchai : function(){
   // console.log("chai nhi bni")

   for (let [key,value] of Object.entries(chai)) {
    if(typeof value != 'function'){
        console.log(`${key} : ${value}`)
    }
 }
 //enumerable property false karne se uske upar iterate nhi kr paate
//  name : masala chai
// price : 999
// available : true
