//yaha pe ham bnayenge object

const User = {
    _email: "ojasgoooogle.com",
    _password: "umbrella",
    get email(){
        return this._email.toUpperCase()

    },
    set email(value){
        this._email = value
    }
    //ab yeh email ek method nhi hai yeh ek property hi hai
}

//factory function  Object.create
// underscore determines ke yeh normal users ke use me nhi aayegi

const tea = Object.create(User)
console.log(tea.email)  // OJASGOOOOGLE.COM
