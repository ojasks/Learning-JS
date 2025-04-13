const myarr = []
//%DebugPrint(myarr)


//v8-debug
//continious, Holey
// SMI (small integer)
// Packed element
// Double (float, sting, function)

//packed also holey
const arrtwo = [1,2,3,4,5]
//packed smi elements  //most optimized //only numbers // cant take decimals

arrtwo.push(6.0)
//packed double elements
//now even if you remove this packed_double_element(6.0) the array will still remain packed_double
   

arrtwo.push('7')
//packed_elements

// an array having a particular kind of elements have different optimization i.e string elements, decimal elements etc

//ek baar downgrade hua toh hua uske baad upgrade nhi ho skta hai array

arrtwo[10] = 11
//holey_elements //because multiple types including gaps

console.log(arrtwo)
console.log(arrtwo.length)
console.log(arrtwo[9])
//imp observations
//decimal was turned into a normal number
//string persisted as a string
//holey elements were shown as undefined


// [ 1, 2, 3, 4, 5, 6, '7', <3 empty items>, 11 ]
// 11
// undefined //these undefined are very costly 

//sabse pehle array me bound check hot hai
//check for hasOwnProperty(arrtwo,9)  //ki iss naam(9) se koi property toh nhi hai jo access karne ki koshish kar rhe ho
// if holes were not there this would have been the last check
//check for hasOwnProperty(arrtwo.prototype,10)
//check for hasOwnProperty(Object.prototype,10) //prototypal nature

// it is one of the most expensive property check
//holes are very expensive in js

//in continuous // smi > double > packed
//in holey // h_smi > h_double > h_packed

const arrfour = new Array(3) //ham iss step ko better kar skte the to optimize
// just 3 holes // holey_smi_elements
arrfour[0] = '1' //downgraded directly to holey_packed_elements //impossible to reverse this
arrfour[1] = '1' 
arrfour[2] = '1' 


const arrfive =[]
arrfive.push('1') //packed_elements
arrfive.push('2') //packed_elements
arrfive.push('3') //packed_elements

const arrsix =[1,2,3,4,5]
arrsix.push(NaN) //packed double
arrsix.push(Infinity) //packed double


//apne methods bnane ki jagah internal by default js ke methods karna is more preferred ny these new engines like v8, v8-default etc

