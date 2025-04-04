const user ={
    username : "ojasks",
    price : 999,
    welcomeMessage : function(){
        //to refer to current context use this keyword
         console.log(`${this.username} welcome to website`)
         console.log(this) // talks about current context //{
        // username: 'ojasks',
         // price: 999,
         // welcomeMessage: [Function: welcomeMessage]
          }
    }
// user.welcomeMessage() //give brackets as it is a method // ojasks welcome to website
// user.username = "sam" // here we changed the context(values)
// user.welcomeMessage()//the username changes to sam as we have not hardcoded the value to ojasks
// console.log(this) //=> {} empty as we are in the node environment as global has no context
//sabse zyada global object is the window object


// function chai(){
//     const user = "ojas"
//    // console.log(this) ✅
//    console.log(this.user)// =>undefined //this works only in objects not in functions
// }
// chai()

// const chai =function(){
const chai = () =>{
    const user = "ojas"
    console.log(this.user)// undefined
    console.log(this)//=> {}
}
// chai()

//basic arrow function
// const addtwo = (num1,num2) => {
//     return num1 + num2
// }
// console.log(addtwo(3,4))

//IMPLICIT RETURN
// //no need for brackets and return for one line
// const addtwo = (num1,num2) => num1 + num2
// console.log(addtwo(3,4))
//curly braces me wrap kara toh return keyword likhna padega
//round brackets me wrap kara toh nhi likhna padega
// const addtwo = (num1,num2) => (num1 + num2)
//IF YOU WANT TO RETURN OBJECT USE CURLY BRACKETS
const addtwo = (num1,num2) => ({username: "ojas"}) // to retun the object u need to wrap {username: "ojas"} in "( )"
console.log(addtwo(3,4))

// const myArr = [2,3,4,5,6]
// myArr.forEach(function() {})  ✅
// myArr.forEach(() => {}) ✅
