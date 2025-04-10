# Projects related to Asynchronous Code

## Project 6

``` javascript
console.log('Project 5');
const insert = document.getElementById('insert');
window.addEventListener('keydown', function (e) {
  insert.innerHTML = `
  <div class = 'color'>
    <table>
  <tr>
    <th>Key</th>
    <th>Keycode</th>
    <th>Code</th>
  </tr>
  <tr>
    <td>${e.key === ' ' ? 'space' : e.key}</td>
    <td>${e.keyCode} </td>
    <td>${e.code}</td>
  </tr>
</table>
  </div> 
  `;
});