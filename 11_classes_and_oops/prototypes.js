// In JavaScript, a prototype is an object from which another object inherits properties and methods.
//  It's the foundation of inheritance in JavaScript, allowing objects to share behavior without redundant code.

// let myname = "ojas"
// console.log(myname.length) //-> 4

// let myname ="ojas   "
// console.log(myname.length) //-> 7
// console.log(myname.trim().length) //-> 4 //isse kaam hojayega par yeh low iq vaali baat hai
// console.log(myname.trueLength) //-> undefined 

let myheros = ["bombardilo crocodilo","spiderman"]
let heropower = {
    bombardilo_crocodilo: "machine gun",
    spiderman : "slingshot",
    getspiderpower : function(){
         console.log(`spider power is ${this.spiderman}`)
    }
}
Object.prototype.ojas =function(){ 
    console.log(`ojasssss is present in all objects`)
}
// heropower.ojas()  // gives ==> ojasssss is present in all objects // imp
 // now this will work with my name
//as we creatd a object function for myheros with the name ojas

// kya mai meri taraf se prototype me kuch insert kar skta hu
//factory function .create //cross check this one
//myheros.ojas(); // gives => ojasssss is present in all objects // imp

//agar object me property inject karin toh vo sabme chalegayi -> array string function
//toh kya agar mai array me inject karu toh kya ye power object me jaayegi ?
Array.prototype.heyoojas = function(){
    console.log(`OJASSS says hello`)
}
//myheros.heyoojas()  //myheros is an array
//heropower.heyoojas() // heropower is an object //will not work // error

//agar top level pe access de diya hai toh sab neeche vaalo ko access mil jaata hai
//reverse not true
//heropower does not have access to heyoojas
//aur haan yeh power function aur strings ke paas bhi nhi aayi hai ye sirf us array ke paas aayi hai
// ueh bhai bhai aapas me share nhi krte

//HAR OBJECT EK ALAG INSTANCE HAI  // an instance is like a unique copy of a blueprint

// INHERITANCE

const user ={
    name : "ojasss",
    email: 'ojasgoogle.com'
}

const Teacher = {
     makeVideo: true
    }
    const TeachingSupport = {
        isAvailable: false
    }
    const TASupport = {
        makeAssignment: 'JS ASSIGNMENT',
        fullTime: true
       //  __proto__: TeachingSupport // //to link two objects //fot this we have prototype
         }

Teacher.__proto__ = user // ab tecaher user ki saari properties access kar skta hai // old approach
// this is prototypal inheritance 
     

//modern syntax
Object.setPrototypeOf(TeachingSupport,Teacher) //TeachingSupport saari propeties access krlo Teacher object ki


let anusername = "chaiaurojasssss        "
String.prototype.truelength = function(){
    console.log(`${this}`) // gives => chaiaurojasssss 
    console.log(`True length is : ${this.trim().length}`)
}
anusername.truelength()
"ojas".truelength()
"coldtea".truelength()
 
// chaiaurojasssss        
// True length is : 15
// ojas
// True length is : 4
// coldtea
// True length is : 7
