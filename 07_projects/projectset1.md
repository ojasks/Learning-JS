# Projects related to DOM

```javascript
//sabse pehle to hame elements ko select karna padega => saare buttons
//sabse pehle buttons ko lenge
const buttons = document.querySelectorAll('.button') //nodelist
const body = document.querySelector("body")

buttons.forEach( function(button) {
console.log(button)
//har ek event ke aage e k event listener lga yenge
button.addEventListener('click' , function(e){
  //e being here for rep event
console.log(e) // mouse event
console.log(e.target)  // tells ki event aa kaha se rha hai
if(e.target.id ==="grey"){
  body.style.backgroundColor = e.target.id
}
if(e.target.id ==="white"){
  body.style.backgroundColor = e.target.id
}
if(e.target.id ==="blue"){
  body.style.backgroundColor = e.target.id
}
if(e.target.id ==="yellow"){
  body.style.backgroundColor = e.target.id
}
if(e.target.id ==="cyan"){
  body.style.backgroundColor = e.target.id
}
})
})