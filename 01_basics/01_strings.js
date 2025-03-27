const name = "ojas"
const repocount = 5

// console.log(name + repocount + " Value") // not recommended in todays date

// console.log(`Hello my name is ${name} and my repo count is ${repocount}`)  // string interpolation

const gamename = new String('ojas-gc-com')
// console.log(gamename[0])
// console.log(gamename.__proto___); //=> gives object
// console.log(gamename.length)
// console.log(gamename.toUpperCase()) // here the original value does not get changed
console.log(gamename.charAt(3))
const newstring = gamename.substring(0,3)// will include the value 0,1,2,3 and not the 4th value// will ignore negative values
// and start from 0
console.log(newstring)

const thirdstring = gamename.slice(-6, 3)// can also give negative values to get reverse string
console.log(thirdstring)

const newStringOne = "    ojas   "
console.log(newStringOne)
console.log(newStringOne.trim()) // helpfull in form filling
// trim works on white spaces and line terminators

const url = "https://ojas.com/ojas%20kumar" // browser does'nt understand spaces

console.log(url.replace( '%20', '-' )) // kya mai search karu aur kisse replace karu
// now the url is usable
console.log(url.includes('ojas'))
console.log(gamename.split('-')) //separator,limit// will now separate based on slash
