//constructor kab call hoga jaise hi class se ek object initialize hoga

class User{
    constructor(username, email, password){
        this.username = username
        this.email = email
        this.password = password
    }
    encryptpass(){
        return `${this.password}abc`
    }
}
const chai = new User("ojasss", "ojaschai.com","juqdbhw")
//console.log(chai.encryptpass())  // => gives juqdbhwabc


//behind the scene
function Userio(username, email, password){
this.username = username;
this.email = email
this.password = password
}
Userio.prototype.encryptPassword = function(){
    return `${this.password}abc`
}
const tea = new Userio("ojassstea", "ojastea.com","juqdbhw")
console.log(tea.encryptPassword()) // => gives juqdbhwabc
