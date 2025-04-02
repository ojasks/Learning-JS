//to avoid pollution from global scope 
//we create a different scope
//to remove pollution of global variales
//which also gets immediately executed

//IMMEDIATELY INVOKED FUNCTION EXPRESSION (IIFE)

// function chai() {
//     console.log('DB Connected')
// }
// chai() 

(function chai(){
    console.log('DB Connected')
})(); //immmediately invoked function invoke toh ho gya par ise pata nhi hai rukna kaha hai
//so we need to stop it
//use semicolom

// (definition)(execution)

// ( function aurcode()  {
//     console.log('DB Connected two')
// })()
 
( (name) =>  {
    console.log(` DB Connected two ${name}`)
})("ooojaass")