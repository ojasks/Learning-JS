//reduce 

// const mynums = [1,2,3]
// const mytotal = mynums.reduce( function (accumulator, currentvalue)  {
//     console.log(`accumulator : ${accumulator} and currentvalue : ${currentvalue}`)
//     return accumulator + currentvalue
// },0)
// console.log(mytotal) // => 6
//accumulator ko pta hi nhi ki start kaha se karna hai // given by,0
// accumulator : 0 and currentvalue : 1
// accumulator : 1 and currentvalue : 2
// accumulator : 3 and currentvalue : 3
//6

//now writing in arrow function
const mynums = [1,2,3]
const mytotal = mynums.reduce( (accumulator, currentvalue) => {
    //console.log(`accumulator : ${accumulator} and currentvalue : ${currentvalue}`)
    return accumulator + currentvalue
},0)
//console.log(mytotal)

// accumulator : 0 and currentvalue : 1
// accumulator : 1 and currentvalue : 2
// accumulator : 3 and currentvalue : 3
// 6


const shopcart = [
    {
        itemname: "eggs",
        price: 45
    },
    {
        itemname: "ramen",
        price: 120
    },
    {
        itemname: "healthy_tasty_snacks",
        price: 150
    },
    {
        itemname:"toblerone_chocolate",
        price:200
    }
]
const ptpay = shopcart.reduce( (acc,item) => acc + item.price,0)
console.log(ptpay) //515
//agar ek bhi price string form me hota toh saare number as string concatenate hoke return hote
