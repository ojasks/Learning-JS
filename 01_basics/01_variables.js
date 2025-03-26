const accountId = 144553;//constant
let accountEmail = "hitesh@google.com"
var ccountPassword = "12345" //let and var take initializations in double quotes
accountCity="Jaipur"
let accountstate; //when you dont know default state

//accountId=2 //not allowed

accountEmail=" ojaskr@google.com";
ccountPassword="1232112"
accountCity="Bengaluru"; // not a good practice but it can still happen

//for all
console.table([accountEmail, ccountPassword, accountCity, accountstate]);

//we can declare variables in two ways in js 1.let 2.var
/*
prefer not to use var 
because of issue in block scope and functional scope
*/
//jab jab const let var mile toh unhe memory me assign kardo(default syntax response)