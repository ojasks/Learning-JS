//functions

function saymyname(){
    console.log("O")
    console.log("J")
    console.log("A")
    console.log("S")
}
// saymyname// aese kuch print nhi hoga kyuki ye sirf uska reference hai
// saymyname() 

// function addtwonums( number1 , number2 ){ // number1 and number2 are parameters
//     console.log(number1 + number2)
// }
 
// addtwonums()//=>NaN
// addtwonums(3,4)
// addtwonums(3,"4")
// addtwonums(3,"a")
// addtwonums(3,null) // 3 & null are arguments
//function ko jab define karte hai toh unme jo value pass karte hai unko bolte hai parameters
//function lo jab call karte hai toh unme jo value dete hai arguments
// const result = addtwonums(3,5) // will print the answer without console log as it inside itself has a console.log
// console.log("Result: ", result) //=> undefined 



// function addtwonums( number1 , number2 ){ // number1 and number2 are parameters
//     // let result = number1 + number2
//     // return result
//     return number1 + number2
//     console.log("oJAS") // HERE THE CODE IS UNREACHABLE
// }

// const result = addtwonums(3,5) // will not print the answer as the function now does'nt have a console log inside it
// console.log("Result: ", result) // will now give the answer instead of undefined as the function return a value

//🌟
function loginusermessage(username){
    if(username === undefined){   // "" empty string aur undefined ko maan liya jaata hai ki vo false value hai
        // also be written as //   if(!username)
        console.log("Please eneter a username")
        return
    }
    return `${username} just logged in `
}

function loginusermessage(username){
    if(!username){  
        console.log("Please eneter a username")
        return
    }
    return `${username} just logged in `
}

function loginusermessage(username ="sam"){ //here sam is the default value that will always be there until user gives one
    if(!username){   
        console.log("Please eneter a username")
        return
    }
    return `${username} just logged in `
}
// loginusermessage("ojas") // will not work
// console.log(loginusermessage("ojasks"))
// console.log(loginusermessage("")) // just logged in 
// console.log(loginusermessage("ojas")) // undefined just logged in //kyuki vo define hi nhi hua hai


// PART -2 BEGINS *********************
//jab aapko pata nhi hai ki aapke paas kitne parameters aane vaale hai
//just like in the case of a shopping cart


//... is called both rest and also sometimes spread operator
// function calculateCartPrice(...num1){ // here with help of rest operator all the values are passed into an array
//     return num1
// }   //[ 200, 400, 500 ]

function calculateCartPrice(val1,val2,...num1){
      return num1
 }  // [ 500, 2000 ]as these values correspond to num1 while val1 correspond to 200 and val2 to 400
// console.log(calculateCartPrice(2))
// console.log(calculateCartPrice(200,400,500,2000)) // willg ive only the first value

const user = {
    name : "ojas",
    price :199
}

function handleobject(anyobject){
    console.log(`Username is ${anyobject.name} and the price is ${anyobject.price}`)

}
handleobject(user)

handleobject({
    name : "sajo",
    price : 30
})

const newarr = [200, 400, 100, 600]
function returnsecondvalue(getarray){
    return getarray[1]
}
console.log(returnsecondvalue(newarr))
console.log(returnsecondvalue([200,400,100,600]))

// create object then function
