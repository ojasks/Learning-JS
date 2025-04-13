//yaha pe hamne bnaya tha function

function User(email,password){
    this._email = email
    this._password = password
    Object.defineProperty(this, 'email',{
        get: function(){
            return this._email.toUpperCase()
        },
        set: function(value){
            this._email = value
        }
    } )
    Object.defineProperty(this, 'password',{
        get: function(){
            return this._password.toUpperCase()
        },
        set: function(value){
            this._password = value
        }
    } )
}
  //email being the property here jisko ham overwrite karna chahte hai
  //aslo third parameter is an object

  const ojas = new User("ojasgoogle.com","abcdefghijkl")
console.log(ojas.email)  // OJASGOOGLE.COM 