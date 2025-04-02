//scopes


//everything inside if is BLOCK SCOPE
//everything outside if is GLOBAL SCOPE
// var c=300

if(true){
    let a=10
const b=20
// var c=30 //here the value of c will be changed unintentionally if already initialized before
//thats why we dont use var
//HERE THE PROBLEM persists even if we dont use var 
}

// console.log(a)// shows error
// console.log(b)// shows error
// console.log(c) 


let a=300 //value of  a here is independent 
if(true){
    let a=10
const b=20
//console.log("INNER :", a)
}

// for (let i = 0; i < array.length; i++) {
//     const element = array[i];
    
// }
// console.log(a)//till inside block scope value is 10 when in global scope it is 300
//global scope is different when in console and when in running environment 

function one(){
    const username ="ojasss"

    function two(){
        const website = "youtube.com"
        console.log(username)
    }
    // console.log(website)//website yaha kaha access kr rhe ho scope se bahar hai
     two()//if commented out will give nothing for one()
}
// one()
//ice cream example 
//jo chhote hai vo bado se ice cream maang sakte hai par bade chooto se nhi maang skte
//same here two can ask from one but one cant

if(true){
    const username = "ojas"
    if(username === "ojas"){
        const website = " youtube"
        //console.log(username + website)
    }
   // console.log(website); // will give error
}
//console.log(username) // will give error

//+++++++++++++++++++++++++++++++++++++ interesting ************/


console.log(addone(5)) // even before the function initialization it is accessed woww
function addone(value){
    return value + 1 
    //function
}
console.log(addone(5))

console.log(addtwo(5))//will not run before initialization
const addtwo = function(num){ // yaha pe humne usko declare krne ke saath ek variable me hold bhi kr diya hai
    return num+2
    //expression
}
console.log(addtwo(5))