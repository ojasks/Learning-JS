// const tinderuser = new Object() // singleton object 
// const tinderuser = {} // will also return empty value //non singleton object
// console.log(tinderuser) // will return empty object

const tinderuser = {}
tinderuser.id = "123abc"
tinderuser.name = "young sammy"
tinderuser.isLoggedIn = "false"
//outside .
// console.log(tinderuser)

const regularuser = {
    email : "ojasgoogle.com",
    fullname : {
        userfullname : {
            firstname : "ojas",
            middlename : "kumar",
            lastname : "singh"
        }
    }
}
// console.log(regularuser.fullname)
//optional chaining //sometimes we get a question mark console.log(regularuser.fullname?) 
// that is when fullname exist hi nahi karta ho toh //jab api se response aata hai tab yeh
//use karna padhta hai ki agar hai toh kariye
//varna if else use karna padega har jagah


//objects merge and combine
const obj1 = {1: "a", 2: " b", 3: " c"}
const obj2 =  {4: "d", 5: " e", 6: " f"}
// const obj3 = { obj1, obj2}
//  console.log(obj3) //gives array inside an array
// const obj3 = Object.assign({},obj1,obj2) //{} is an optional parameter but good if you put it //(target,source)
//(target  being {}) and source being (obj1,obj2)
const obj3 = {...obj1,...obj2}
//  console.log(obj3)

const users = [
    //database se jab aapke paas data aayega toh array of objects  aayega
    {
        id:1,
        email : "ojasgoogle.com"
    },
    {
        id:2,
        email : "ojasgoogle.com"
    },
    {
        id:3,
        email : "ojasgoogle.com"
    }

]
//to access
console.log(users[1].email)
console.log(tinderuser)
console.log(Object.keys(tinderuser)) // gives all the keys i.e [ 'id', 'name', 'isLoggedIn' ]
// and is of the type array
console.log(Object.values(tinderuser)) //[ '123abc', 'young sammy', 'false' ]
console.log(Object.entries(tinderuser)) // give the key value pair in an array
//  with the first value being key and second being value 
//[
//    [ 'id', '123abc' ],
//  [ 'name', 'young sammy' ],
//  [ 'isLoggedIn', 'false' ]
//]
  
//when ypu loop through an object and try to find a value 
//now if that value does not exist there are chances that it will crash
//so you can look manually or ask it if it has the value
console.log(tinderuser.hasOwnProperty('isLoggedIn')); // ->true
console.log(tinderuser.hasOwnProperty('isLogged')); // ->false


//PART-3 OF THE VIDEO
//destructuring
const course = {
    coursename : "js in hindi",
    courseinstructor : "ojas",
    price : "999"
  } 
console.log(course.courseinstructor) // becomes too bg to write again adn again
//another way 
const {courseinstructor : instructor} = course  // can give ita a name and make it destructured
console.log(instructor); 

 //   API  ARE kuch values aati hai backend se aap un values ko kaise likhte hai
 //pehle ke time me vo values aati thi xml structure me
 //ab mostly values aati aap pe JSON me
  
//json
//in a proper json structure key and values both are string
// does'nt have a object name
//  {
//     "name": " ojas",
//    " coursename": "js in hindi",
//     "email ": "ojasgoogle.com"
//     "price": "free"
//  }

//json se api call hoti hai
//api's objects as well as arrays ke format me bhi milti hai


// [
//     {},
//     {},
//     {}
// ]

//json simply is js object notation
