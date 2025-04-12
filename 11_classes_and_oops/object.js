// # Prototype in detail
// js default behaviour -> prototypal beehaviour
// haar nhi maanti jab tak usko voh specific cheez nhi mil jaati
// arrow functions ke andar this keywords ka access isliye nhi hota
// object ka koi parent nhi hota hai
// function bhi ek object hai




function multiplybytwo(num){
    return num*2
}
multiplybytwo.power=2
//console.log(multiplybytwo(2))
//onsole.log(multiplybytwo.power) // -> 2
//console.log(multiplybytwo.prototype) //-> {}
// .(access) function ke saath lgta hai
// function function bhi hai aur function object bhi hai
function createUser (username, score) {
    this.username = username
    this.score = score
}
    createUser.prototype.increment = function(){
        this.score++
    }
    createUser.prototype.printme = function(){
       console.log(`Score is ${this.score}`)
    }
    const chai = new createUser ("chai", 25) //without new keyword this wont run with console.log
    const tea = createUser ("tea", 250)
    //ab yaha problem ye hai mai scor ekiska badhau ab
    //aapko ek saath do logo ne awaaz lgai toh ab kiske paas jaana hai unme se
    // this matlab jis  // this = jis

    //you dont need to write .prototype again and again
    chai.printme()  //Score is 25
    //interview me yehi dikhana hota hai ki pehle code nhi chal rha tha par ab chal rha hai because of new keyword
     
    //new keyword
    //pehle ek object liya
    //us object me ek prototype inject kiya





//     A new object is created: The new keyword initiates the creation of a new JavaScript object.
// A prototype is linked: The newly created object gets linked to the prototype property of the constructor function. 
// This means that it has access to properties and methods defined on the constructor's prototype
// The constructor is called: The constructor function is called with the specified arguments and this is 
// bound to the newly created object.
//  If no explicit return value is specified from the constructor, JavaScript assumes this,
// the newly created object, to be the intended return value.
// The new object is returned: After the constructor function has been called, if it doesn't return a 
// non-primitive value (object, array, function, etc.), 
// the newly created object
// The new object is returned: After the constructor function has been called, if it doesn't 
// return a non-primitive value (object, array, function, etc.), 
// the newly created object is returned.