# Project 5 on Asynchronous Code

```javascript
// sabse pehle generate a random color
const randomcolor = function () {
  const hex = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += hex[Math.floor(Math.random() * 16)];
  }
  return color;
};
let wow;
const startchangingcolor = function () {
  if (!wow) {
    wow = setInterval(changebgcolor, 1000);
  }
  function changebgcolor() {
    document.body.style.backgroundColor = randomcolor();
  }
};
const stopchangingcolor = function () {
  clearInterval(wow);
  wow = null;
};
document.querySelector('#start').addEventListener('click', startchangingcolor);
document.querySelector('#stop').addEventListener('click', stopchangingcolor);