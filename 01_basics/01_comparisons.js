// console.log(2 >1)
// console.log(2 >= 1)

// //problem occurs when you dont compare the same data types
// console.log("2" > 1 )  // js automatically converted string "2" in number
// console.log("02" > 1 )

// console.log(null > 0)
// console.log(null == 0)
// console.log(null >= 0) // here we lose predictability

//avoid these types of comparisons

// when we use equality operator js converts null to 0 //console.log(null == 0)// checks (0==0)
//same for (null >=0)  here it is checked as (0>=0)

// both == and <=/>= work differently

// console.log(undefined > 0)
// console.log(undefined == 0)
// console.log(undefined >= 0)
// undefined always gives false
// avoid these types of comparisons

// ===  //strict check
// does'nt only check values but also checks data types

console.log("2" === 2)// => false
 