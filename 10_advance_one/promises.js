
//  promises are objects that represent the eventual completion of an asynchronous operation


//know how to consume and create promises
//promises also reduce callback hell
 const Promiseone = new Promise( function(resolve, reject){
    setTimeout(function(){
       // console.log('Async task is complete')
        //resolve()
    },1000)
 })
 //sirf resolve chalaoge bina console.log() ke toh undefined aayega
 //now that the promise is created it needs to be consumed
Promiseone.then(function(){
    // console.log("promise consumed")
})
//.then ka seedha relation hai aapke resolve ke saath
//.then returns the values of prommise
//.then has a callback function

//promise consumed was never printed on terminal because you didnt connect the .then with resolve
// for that connect resolve  => resolve()
// jab resolve( execute hoga tab vo connect hoga .then se)

//Async task is complete
//promise consumed

//another way without initializing with another variable
new Promise(function(resolve, reject){
    setTimeout(function(){
         //console.log("ASYNC TASK 2")
        // resolve()
    },1000)
}).then(function(){
   // console.log("Async 2 resolved")
}) 
//.then( just after the promise function as it was not stored in another variable)


const Promisethree = new Promise( function(resolve, reject){
    setTimeout(function(){
        //resolve({user: "ojass", email:"ojasgoogleee.com.example"})
    },1000)
 })
 //now that the promise is created it needs to be consumed
Promisethree.then(function(user){
    // console.log(user)
})

const PromiseFour = new Promise(function(resolve,reject){
    setTimeout(function(){
        // let error = false;  // will give ERROR: SOMETHIN=G WENT WRONG
        let error = false;  // will give { username: 'ojasks', password: 'beingbest1243' }
        //ojasks
        if(!error){
            resolve({username: "ojasks", password: "beingbest1243"})
        }else{
            //reject("ERROR: SOMETHIN=G WENT WRONG")
        }
    },1000)
})
// .then chaining to remove callback hell//.then will have the value of previous .then
// also put .catch() because we are also showing error
PromiseFour
.then((user) => {
  //  console.log(user)
    return user.username
})
.then((username)=>{
    //console.log(username)
})
.catch((error) => {
   // console.log(error)
})
//.finally(()=> console.log("The promise is either resolved or rejected"));




const Promisefive = new Promise( function(resolve, reject){
    setTimeout(function(){
        let error = true;  //wont run properly for true
        // let error = false;  //iss ke liye await badiya chalega // { username: 'ojasks', password: 'beingbest1243' }
        //ojasks
        if(!error){
            //resolve({username: "ojasks", password: "beingbest1243"})
        }else{
            //reject("ERROR: JS WENT WRONG")
        }
    
    },1000)
 })
 //now that the promise is created it needs to be consumed
async function consumepromisefive(){
     try {
        const response = await Promisefive
     console.log(response)
     } catch (error) {
        console.log(error) // for true it will give  // ERROR: JS WENT WRONG
     }
}
// consumepromisefive()
// async await cant run directly for errors // so put it in try catch log




//async function hai matlab uske andar kuch input aane waala hai
async function getallusers(){
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        // console.log(response)
        const data = await response.json()  // we make the response into json becaus eit is currently getting it in string 
        //isko json me convert hone me time lagta hai// isliye isko bhi 'await' krwna padega
        console.log(data);
     } catch (error) {
        console.log("E:", error) // for true it will give  // ERROR: JS WENT WRONG
     }
}
//yeh ek promise vaapis dega
//getallusers()


//now writing the same code int the .then .catch .finally format

fetch('https://jsonplaceholder.typicode.com/users')
.then((response) => {return response.json()})
.then((data) => {console.log(data)})
.catch((error) => {console.log(error)})


//abhi aapko fetch samjh nhi aaya hai

fetch('https://api.github.com/users/hiteshchoudhary')
.then ((response) => {return response.json()})
.then ( (data) => {
    console. log(data); })
.catch((error) => { console.log(error)})

// fetch method starts process of fetching a resource from the network
//  Q. aapne ek promise se request kari waha se ek error code aagya 404 toh voh aapko resolve me milega ya reject me milega
//   A. will get as a response => resolve , you only get rejected when you cant access the request


//fetch jo kaam kra rha hai vo hamesha execute ho rha hai , all rest is being executed later on i.e setInterval 
//fetch queue => micro task queue/ priority queue 