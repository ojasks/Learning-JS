//for of 

// for(const element of object){

// }

// const arr = [1,2,3,4,5]
// for (const element of arr) {
//     console.log(element);
// }

// const greetings = "Hello GURMAN"
// for (const greet of greetings) {
//     console.log(`Each char is ${greet}`)
    
// }

//Maps
//HOLDS KEY VALUE PAIR, REMEMBERS ORIGINAL ORDER OF INSERTION OF KEYS, HAS ONLY UNIQUE VALUES
const map = new Map()
map.set('IN', "India")
map.set('USA',"United States of America")
map.set('FR',"France")
map.set('IN', "India") // even when repeated the key:value pair in map remains same
// console.log(map)
for (const key of map) {
   // console.log(key)
} //=>pure ka pura map hi aagya is se
for (const [key,values] of map) {
    // console.log(key,':-', values)
} 
// IN :- India
// USA :- United States of America
// FR :- France

const myobject = {
    'game1' : 'NFS',
    'game2' : 'Spiderman'
}
for (const [key,value] of myobject) {
    // console.log(key,':-', value)
} //=>  myobject is not iterable


