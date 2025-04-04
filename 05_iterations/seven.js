// const mynums = [1,2,3,4,5,6,,7,8,9]
// const newnums = mynums.map( (num) => {return num+10})
// console.log(newnums) // [ 11, 12, 13, 14, 15, 16, <1 empty item>, 17, 18, 19 ]

const mynums = [1,2,3,4,5,6,7,8,9,10]
const newnums = mynums
                        .map( (num) => num * 10)
                        .map( (num) => num + 1 ) //the num received here will have the value operated on by the previous map
                        .filter( (num) => { return num >= 40} ) // filter matlab jo true hai vo hi pass hoga

console.log(newnums)