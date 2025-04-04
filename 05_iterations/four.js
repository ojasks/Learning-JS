const myobject = {
    js: "javascript",
    cpp: "C++",
    rb: "ruby",
    swift: "swift by apple"
} 
//objects ke liye hota hai forin loop
for (const key in myobject) {
    //console.log(`${key} shortcut is for ${myobject[key]}`)
}
// js shortcut is for javascript
// cpp shortcut is for C++
// rb shortcut is for ruby
// swift shortcut is for swift by apple

//const prog = ["js","cpp","rb","swift","ojas","wowo"]
//for (const key in prog) {
    //console.log(key)
//}
//by default arrays ke keys unki index hoti hai
// 0
// 1
// 2
// 3j
// 4
// 5

//const prog = ["js","cpp","rb","swift","ojas","wowo"]
//for (const key in prog) {
    //console.log(key)
    //console.log(prog[key])
//}
// 0
// js
// 1
// cpp
// 2
// rb
// 3
// swift
// 4
// ojas
// 5
// wowo

const map = new Map()
map.set('IN', "India")
map.set('USA',"United States of America")
map.set('FR',"France")
map.set('IN', "India") 
for (const key in map) {
    console.log(key) //kuch bhi nhi aaya kyuki map iterable nahi hai
}


