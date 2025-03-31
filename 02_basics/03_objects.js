//constructor se agar banega toh hamesha singleton banega
//singleton




//object literals // used to declare objects
// Object.create  //constructor method // isi ke andar singleton bnta hai
const mysmb = Symbol("key1")

const jsuser = {
    name: "Ojas", //has key and value pair unnlike array jiski values index deke access kar skte hai
    "full name" : "ojas kumar singh",
    [mysmb] : "mykey1", // only way to access it by  brackets // 🌟 important
    age: 18,
    Location : "Patiala",
    email : 'osingh22.com',
    isLoggedIn: false,
    lastlogindays: ["monday","wednesday","friday"]
}
//how to access objects
// console.log(jsuser.email) // there is one more way
// console.log(jsuser["full name"])//as all the elemnts inside the object are strings and there
//is no way you can access "full name" using '.' 
// console.log(jsuser[mysmb])
// console.log(typeof jsuser.mysmb) //cant accss it this way

jsuser.email = "myojasgoogle.com"
// console.log(jsuser.email)
//if you want to stop further changes from happening in your object yu can freeze the object
// Object.freeze(jsuser)
jsuser.email = "'osingh22.com"// now the email wont change
// console.log(jsuser)

jsuser.greeting = function(){
    console.log("Hello js user");
}

jsuser.greetingt = function(){
    console.log(`Hello js user, ${this.name}`);  //whenever same object (here jsuser ko reference krna hai use "this"
    // "." by using dot operator you can access all properties inside the object
}

console.log(jsuser.greeting)   // function reference tag //function execute nhi hua hai bas uska reference aay hai
console.log(jsuser.greeting())
console.log(jsuser.greetingt) 
console.log(jsuser.greetingt()) 


//symbol,access methods ,functions