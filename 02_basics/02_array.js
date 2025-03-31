//array part-2
const mcheros = ["blackpanther","ironman","spiderm"]
const dcheros = ["superman","batman","wonderwoman"]
// mcheros.push(dcheros) // onw would expect that both will merge
// instead an array within an array is created
// console.log(mcheros)
// console.log(mcheros[3][1])
const newvar = mcheros.concat(dcheros) // returns a new array so initialize a new var// does the normal concat
console.log(newvar)
const newheros = [...mcheros, ...dcheros] //Spreads // does the same work as concat
console.log(newheros)
const anarray = [1,2,3,[4,5,6],7, [6,7, [4,5]]] // depth is 3
const realanarray = anarray.flat(2) // give exact depth in brackets // can also give infinity
console.log(realanarray)
console.log(Array.isArray("Ojas"))
console.log(Array.from("Ojas"))
console.log(Array.from({name: "Ojas"})) // interesting //gives an empty array as we have to specify the array we want is from keys or values
let sco1 = 100
let sco2 = 200
let sco3 = 300

console.log(Array.of(sco1,sco2,sco3))
//is from  of