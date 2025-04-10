# Projects related to DOM

## Project 4

``` javascript
let randomnumber = parseInt(Math.random() * 100 + 1);
const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const guessslot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const loworhigh = document.querySelector('.lowOrHi');
const startover = document.querySelector('.resultParas');
//we will creare a paragraph
const p = document.createElement('p');
let prevguess = [];
let numguess = 1;
let playgame = true;
if (playgame) {
  submit.addEventListener('click', function (e) {
    e.preventDefault();
    const guess = parseInt(userInput.value);
    validateguess(guess);
  });
}
function validateguess(guess) {
  // will validate if the value is an actual value ,between 1 and 100
  if (isNaN(guess)) {
    alert('please enter a valid number');
  } else if (guess < 1) {
    alert('please enter a number greater than 1');
  } else if (guess > 100) {
    alert('please enter a number less than 100');
  } else {
    prevguess.push(guess);
    if (numguess === 11) {
      displayguess(guess);
      displaymessa(`better luck next time. Random number was ${randomnumber}`);
      endgame();
    } else {
      displayguess(guess);
      checkGuess(guess);
    }
  }
}
function checkGuess(guess) {
  // if value is equal to the random number or not
  if (guess === randomnumber) {
    displaymessa('you guessed it right');
    endgame();
  } else if (guess < randomnumber) {
    displaymessa('number is tooo low');
  } else if (guess > randomnumber) {
    displaymessa('number is tooo high ');
  }
}
function displayguess(guess) {
  userInput.value = '';
  guessslot.innerHTML += `${guess}`;
  numguess++;
  remaining.innerHTML = `${11 - numguess} `; //this spacing is imp*
}
function displaymessa(message) {
  // will interact directly with dom
  loworhigh.innerHTML = `<h2>${message}</h2>`;
}
function endgame() {
  userInput.value = '';
  userInput.setAttribute('disabled', '');
  p.classList.add('button');
  p.innerHTML = `<h2 id="newgame">Start new game</h2>`;
  startover.appendChild(p);
  playgame = false;
  newgame();
}
function newgame() {
  const newgamebutton = document.querySelector('#newgame');
  newgamebutton.addEventListener('click', function (e) {
    //pehle saaare variables reset karo fir playgame =true
    randomnumber = parseInt(Math.random() * 100 + 1);
    prevguess = [];
    numguess = 1;
    guessslot.innerHTML = '';
    remaining.innerHTML = `${11 - numguess} `;
    userInput.removeAttribute('disabled');
    startover.removeChild(p);
    playgame = true;
  });
}



// let randomnumber = parseInt(Math.random() * 100 + 1);
// console.log(randomnumber);
// const submit = document.querySelector('#subt');
// const userInput = document.querySelector('#guessField');
// const guessslot = document.querySelector('.guesses');
// const remaining = document.querySelector('.lastResult');
// const loworhigh = document.querySelector('.lowOrHi');
// const startover = document.querySelector('.resultParas');

// console.log({
//   submit,
//   userInput,
//   guessslot,
//   remaining,
//   loworhigh,
//   startover,
// });

// //we will creare a paragraph
// const p = document.createElement('p');
// let prevguess = [];
// let numguess = 1;
// let playgame = true;
// if (playgame) {
//   submit.addEventListener('click', function (e) {
//     e.preventDefault();
//     const guess = parseInt(userInput.value);
//     console.log(guess);
//     validateguess(guess);
//   });
// }
// function validateguess(guess) {
//   // will validate if the value is an actual value ,between 1 and 100
//   if (isNaN(guess)) {
//     alert('please enter a valid number');
//   } else if (guess < 1) {
//     alert('please enter a number greater than 1');
//   } else if (guess > 100) {
//     alert('please enter a number less than 100');
//   } else {
//     prevguess.push(guess);
//     if (numguess === 11) {
//       displayguess(guess);
//       displaymessa(`better luck next time. Random number was ${randomnumber}`);
//       endgame();
//     } else {
//       displayguess(guess);
//       checkGuess(guess);
//     }
//   }
// }
// function checkGuess(guess) {
//   // if value is equal to the random number or not
//   if (guess === randomnumber) {
//     displaymessa('you guessed it right');
//     endgame();
//   } else if (guess < randomnumber) {
//     displaymessa('number is tooo low');
//   } else if (guess > randomnumber) {
//     displaymessa('number is tooo high ');
//   }
// }
// function displayguess(guess) {
//   userInput.value = '';
//   guessslot.innerHTML += `${guess} `;
//   numguess++;
//   remaining.innerHTML = `${11 - numguess} `; //this spacing is imp*
// }
// function displaymessa(message) {
//   // will interact directly with dom
//   loworhigh.innerHTML = `<h2>${message}</h2>`;
// }
// function endgame() {
//   userInput.value = '';
//   userInput.setAttribute('disabled', '');

//   const p = document.createElement('p'); // ⬅️ move this inside
//   p.classList.add('button');
//   p.innerHTML = `<h2 id="newgame">Start new game</h2>`;
//   startover.appendChild(p);
//   playgame = false;

//   const newgamebutton = document.querySelector('#newgame');
//   newgamebutton.addEventListener('click', function (e) {
//     randomnumber = parseInt(Math.random() * 100 + 1);
//     prevguess = [];
//     numguess = 1;
//     guessslot.innerHTML = '';
//     remaining.innerHTML = `${11 - numguess}`;
//     userInput.removeAttribute('disabled');
//     startover.removeChild(p);
//     playgame = true;
//     loworhigh.innerHTML = '';
//   });
// }
