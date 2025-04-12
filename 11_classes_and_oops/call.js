function setusername(username){
    //complex db calls
    this.username = username
    console.log("called")
} //ab yeh createuser ka this karega aur apna nhi karega
function createuser(username,email,password){
    setusername.call(this, username) // yeh actually is tarah call ho hi nhi rha hai // bas reference diya par call nhi kiya //
    this.email = email
    this.password = password
}
const chai = new createuser("ojaschai", "ojasgooglechai.com","1293beu")
console.log(chai) // gives => createuser { email: 'ojasgooglechai.com', password: '1293beu' }

//yaha pe problem ye aa rhi hai ki function end hua toh usko hta diya par uske sath saath uska functional 
//context bhi hata diya toh jo context ke andar variables the vo bhi nikal gye jisse vo kabhi agle context tak pahuncha hi nhi
// ISLIYE HAME USKA REFERENCE HOLD KARKE RAKHNA HAI USE .call 
//sirf .call likhne se bhi kaam nhi hoga par isse aapko object me koi change nhi milega


//we finally get
// called
// createuser {
//   username: 'ojaschai',
//   email: 'ojasgooglechai.com',
//   password: '1293beu'
// }

//in bookish language .call current execution context kisi aur function ko paas kr deta hai