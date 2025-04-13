//yaha pe hamne bnai thi class



class User{
    constructor(email,password){
        this.email = email
        this.password = password
    }
    get password(){
        return this._password.toUpperCase() // agar koi le rha hai db se toh usko yeh milegi
    }
    //now this alone will give a error
    // if u define getter also define setter
    set password(value){
        this._password = value
    }
}
const ojas = new User("ojasgoogle.com","abcdefghijkl")
console.log(ojas.password) // ABCDEFGHIJKL


//we get a error due to a race condition in which there is a race between getter/setter and costructor to initialize the values
//could be avoided by adding an underscore to the variable '_'
// also we dont return setters
// RangeError: Maximum call stack size exceeded
//     at set password (/Users/goldbook/Desktop/JS_March/11_classes_and_oops/getter_setter.js:12:23)
//     at set password (/Users/goldbook/Desktop/JS_March/11_classes_and_oops/getter_setter.js:12:23)
//     at set password (/Users/goldbook/Desktop/JS_March/11_classes_and_oops/getter_setter.js:12:23)
//     at set password (/Users/goldbook/Desktop/JS_March/11_classes_and_oops/getter_setter.js:12:23)
//     at set password (/Users/goldbook/Desktop/JS_March/11_classes_and_oops/getter_setter.js:12:23)
//     at set password (/Users/goldbook/Desktop/JS_March/11_classes_and_oops/getter_setter.js:12:23)
//     at set password (/Users/goldbook/Desktop/JS_March/11_classes_and_oops/getter_setter.js:12:23)
//     at set password (/Users/goldbook/Desktop/JS_March/11_classes_and_oops/getter_setter.js:12:23)
//     at set password (/Users/goldbook/Desktop/JS_March/11_classes_and_oops/getter_setter.js:12:23)
//     at set password (/Users/goldbook/Desktop/JS_March/11_classes_and_oops/getter_setter.js:12:23)