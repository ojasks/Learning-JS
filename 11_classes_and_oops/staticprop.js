class User{
    constructor(username){
        this.username = username
    }
    logme(){
        console.log(`USERNAME is ${this.username}`)
    }
    static createid(){  //yeh functionality jab mai sbko nhi dena chahta tab mai static use krta hu
        return `123`
    }
}
 const ojas = new User("ojassssks") 
 //console.log(ojas.createid()) //=> 123

 class Teacher extends User{
    constructor(username, email){
        super(username)
        this.email = email
    }
}
const nokia = new Teacher("ojassssks","ojasksgoogle.com")
nokia.logme()  //USERNAME is ojassssks
console.log(nokia.createid())  // console.log it cause it is returning // not allowing even the child to access
