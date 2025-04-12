class User{
    constructor(username){
        this.username = username
    }
    logme(){
        console.log(`USERNAME is ${this.username}`)
    }
}
class Teacher extends User{
        constructor(username, email, password){
            super(username)
            this.email = email
            this.password = password
        }
        addcourses(){
            console.log(`A NEW COURSE WAs added by ${this.username}`)
        }
    }
    const chai = new Teacher("chai", "chai@teacher.com","jvhyuc")
    chai.addcourses();
    const tea = new User("tea")
    tea.logme();

    console.log(chai === tea) //=> false
    console.log(chai === Teacher) //=> false
    console.log(chai instanceof Teacher) // => true
    console.log(chai instanceof User) // => true  //because teacher is also a instant of User
    

