# Projects related to DOM

## Project 2
``` javascript 
const form = document.querySelector('form');
///form ka default action rok lo kyuki ham yaha pe info url ya server ko nhi bhej rhe

// const height = parseInt(document.querySelector('#height').value)
//agar bahar likhoge toh script run hojayegi , aur empty value store ho jayegi, isliye andar likho

form.addEventListener('submit', function (e) {
  e.preventDefault(); //kahi submit vgera mat krdo
  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const result = document.querySelector('#results'); //here no parseint
  //jab aap click karna cha rhe hai aap tbhi usi time pe aaap values bhi lena cha rhe hai , us event ke upar(not the literal one) aap values lena cha rhe hai
  if (height === '' || height < 0 || isNaN(height)) {
    result.innerHTML = `Pleaseeeeeeeeeeeeee give a valid height ${height}`;
  }
  // results.innerHTML = `${height}`;
  else if (weight === '' || weight < 0 || isNaN(weight)) {
    result.innerHTML = `Pleaseeeeeeeeeeeeee give a valid weight ${weight}`;
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2); //till two fixed decimal places
    //show the result
    // results.innerHTML = `<span>${bmi}</span>`;
    if (bmi < 18.6) {
      result.innerHTML = `<span>${bmi} Under Weight </span>`;
    } else if (bmi >= 18.6 && bmi <= 24.9) {
      result.innerHTML = `<span>${bmi} Normal weight </span>`;
    } else {
      result.innerHTML = `<span>${bmi} Over Weight </span>`;
    }
  }
});
