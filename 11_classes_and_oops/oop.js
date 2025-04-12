// Object Literal

const user = {
    username:"ojassssssssssss",
    loginCount: 8,
    signedIn: true,
    getUserDetails: function(){
        console.log("Got user details from database");
        console.log(`username is  ${this.username}`)
        console.log(this) // gives the whole current context

}
}
// console.log(user.username);
// console.log(user.getUserDetails());
//console.log(this) // gives empty parenthesis {}


// constructor function
// const Promiseone = new Promise()
// const date = new Date()
//why these are created in this way
//here the 'new' keyword symbolizes the constructor function

// constructor allows you to create multiple instances from an object literal

function usertwo(username, logincount, isloggedin){
    this.username = username
    this.logincount = logincount
    this.isloggedin = isloggedin
    this.greeting = function(){
        console.log(`Welcome ${this.username}`)
    }
    return this // object pass on kardiya
}

// const userone = usertwo("ojassss", 12, true)
// console.log(userone)
//gave output
/* <ref *1> Object [global] {
  global: [Circular *1],
  clearImmediate: [Function: clearImmediate],
  setImmediate: [Function: setImmediate] {
    [Symbol(nodejs.util.promisify.custom)]: [Getter]
  },
  clearInterval: [Function: clearInterval],
  clearTimeout: [Function: clearTimeout],
  setInterval: [Function: setInterval],
  setTimeout: [Function: setTimeout] {
    [Symbol(nodejs.util.promisify.custom)]: [Getter]
  },
  queueMicrotask: [Function: queueMicrotask],
  structuredClone: [Getter/Setter],
  atob: [Getter/Setter],
  btoa: [Getter/Setter],
  performance: [Getter/Setter],
  fetch: [Function: fetch],
  navigator: [Getter],
  crypto: [Getter],
  username: 'ojassss',
  logincount: 12,
  isloggedin: true */

// const userone = usertwo("ojassss", 12, true)
// const useroo = usertwo("OJASSSSSS", 10, false)
// console.log(userone)
// now even that we print userone the value of of usertwo function gets overwritten by useroo
// gave output
/* <ref *1> Object [global] {
  global: [Circular *1],
  clearImmediate: [Function: clearImmediate],
  setImmediate: [Function: setImmediate] {
    [Symbol(nodejs.util.promisify.custom)]: [Getter]
  },
  clearInterval: [Function: clearInterval],
  clearTimeout: [Function: clearTimeout],
  setInterval: [Function: setInterval],
  setTimeout: [Function: setTimeout] {
    [Symbol(nodejs.util.promisify.custom)]: [Getter]
  },
  queueMicrotask: [Function: queueMicrotask],
  structuredClone: [Getter/Setter],
  atob: [Getter/Setter],
  btoa: [Getter/Setter],
  performance: [Getter/Setter],
  fetch: [Function: fetch],
  navigator: [Getter],
  crypto: [Getter],
  username: 'OJASSSSSS',
  logincount: 10,
  isloggedin: false */

// so thats why we use constructor function because it gives a new copy at each instance
 // also by using the new keyword faaltu ka mess bhi nahin aa rha hai

 //constructor function hame har baar ek naya instance deta hai

 const userone = new usertwo("ojassss", 12, true)
const useroo = new usertwo("OJASSSSSS", 10, false)
console.log(userone)
console.log(useroo)
//gave output
//usertwo { username: 'ojassss', logincount: 12, isloggedin: true }
// usertwo { username: 'OJASSSSSS', logincount: 10, isloggedin: false }

// now what if we did'nt use 'return this' it is implicitly defined even if you dont use it

// on writing new keyword an empty object is created called instance
// secondly a constructor is called due to the new keyword
//yeh kya karta hai aapke jitne bhi new arguments hote hai unhe pack karta hai aur aapko de deta hai
 // in third step 'this keyword' se jo bhi aapne arguments likhe hai vo usme inject ho jaate hai 
 // aur fourth step me mil jaate hai aapko function ke andar

 //when you include the greetings function inside the usertwo function
 // we get
//  usertwo {
//     username: 'ojassss',
//     logincount: 12,
//     isloggedin: true,
//     greeting: [Function (anonymous)]
//   }
//   usertwo {
//     username: 'OJASSSSSS',
//     logincount: 10,
//     isloggedin: false,
//     greeting: [Function (anonymous)]
//   }
  

console.log(userone.constructor)  // gives [Function: usertwo]
// constructor property is a refernce about you only


//instanceOf()

