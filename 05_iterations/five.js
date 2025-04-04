const prog = ["js","cpp","rb","swift","ojas","wowo"]
// prog.forEach(  function name() {})
//callback function me uska naam nhi hota hai
prog.forEach(  function (item) {
    //console.log(item)
})

// js
// cpp
// rb
// swift
// ojas
// wowo

// prog.forEach(  greet=() => {}) //normal implicit function
prog.forEach( (val) => {
    //console.log(val)
})

// js
// cpp
// rb
// swift
// ojas
// wowo

function printme(val){
    //console.log(val)
}
prog.forEach(printme) //✅ function ka reference dena hai
//prog.forEach(printme()) //❌ function ko execute nhi karna hai

// js
// cpp
// rb
// swift
// ojas
// wowo

prog.forEach(  (item, index, arr) =>{
   // console.log(item, index, arr)
})

// js 0 [ 'js', 'cpp', 'rb', 'swift', 'ojas', 'wowo' ]
// cpp 1 [ 'js', 'cpp', 'rb', 'swift', 'ojas', 'wowo' ]
// rb 2 [ 'js', 'cpp', 'rb', 'swift', 'ojas', 'wowo' ]
// swift 3 [ 'js', 'cpp', 'rb', 'swift', 'ojas', 'wowo' ]
// ojas 4 [ 'js', 'cpp', 'rb', 'swift', 'ojas', 'wowo' ]
// wowo 5 [ 'js', 'cpp', 'rb', 'swift', 'ojas', 'wowo' ]

const mycode = [
    {
        langname : "javascript",
        langfileanme : "js"
    },
    {
        langname : "react",
        langfileanme : "rc"
    },
    {
        langname : "threejs",
        langfileanme : "3js"
    }
]
mycode.forEach( (item) => {
    console.log(item.langname)
})

// javascript
// react
// threejs