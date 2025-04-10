# Projects related to DOM

## Project 3
```javascript
const clock = document.querySelector('#clock');
// const clock = document.getElementById('clock')
// let date = new Date()
//ab hame koi aesa method chahiye jo har moment pe run ho so that it returns the time correctly every single time
// console.log(date.toLocaleTimeString());
//aap koi bhi method de dijiye aur bta dijiye ki kitne intervals ke baad repeat krna hai
setInterval(function () {
  let date = new Date();
  // console.log(date.toLocaleTimeString());
  clock.innerHTML = date.toLocaleTimeString();
}, 1000);
//function and 1000 being the two parameters, time counted in milliseconds
