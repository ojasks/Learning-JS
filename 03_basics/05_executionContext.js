//global execution context //always referred by 'this'
 //browser ke andar this ki value window objecct aati hai


 //global execution context
 //function execution context
 //eval execution context //property of global object

//  //sample program
//  let val1 =10
//  let val2 =5
//  function addnum(num1,num2){
//     let total= num1 + num2
//     return total
//  }
//  let result1 = addnum(val1,val2)
//  let result2 = addnum(10,3)



 //program runs in two phasesj
 //1. memory creation phase // jo variables declare kare hai unke liye memory allocate hoti hai execute nhi hote 
 //2. execution phase

//how it executes
 //1st step  global execution is allocated inside "THIS"
//2nd step Memory phase
//val1->undefined //val2->undefined
//(function) addnum -> definition(containing the logic inside the function)
//result1 ->undefined
//result2 ->undefined
//3rd step Execution Phase
//val1 <- 10 //val2 <- 5
//addnum ke andar kuch nhi hoga kyuki execution karne ke liye hai hi nhi 
//addNum ->depended on function // ->will create its own executional context -> [ new enviornment variable + execution thread]
// [ new enviornment variable + execution thread] -----> memory phase ->val1 = undefined ,val2 = undefined, total = undefined
// execution context --> num1= 10 num2 =5 total= 15 and return will return to parent executional context

//ek baar global executional context ka kaam hogaya toh voh delete hojata hai

