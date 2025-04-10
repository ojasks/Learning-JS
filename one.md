# Asynchronous code

Javscript is 
Synchronous(task happen in sync with each other and are not independent)
single threaded (it is slow due to not being multi threaded but javascripts engine is never alone it is always found in a runtime enviornment)

execution context
executes one line of code at a time
 |  ---- cosnole log line 1
 |
 | ----- console.log line 2
 |
 |
 |
\\//
each operation waits for for the last one to execute
call stack , memory heap

 Blocking code vs Non Blocking code

 blockks the flow of the program  (aap yaha pe ruko tab tak mai aap ke liye paani le ke aata hu)(wont be able to do anything until then)
 does not block execution (aap tab tak apna kaam karo tab atk mai aap ke liye paani le ke aata hu)

blocking -- read a file sync(readd a file, ya file me se data lao) , 
os me file aapka program read nhi kar skta hai
it is send to kernel which reads it and then gives the control to the program
and cant do anything unless then

 non blocking code - red file async

 non blocking not always better than blocking 
 ex if a user wants to register a data and give message of successfull registration , ab us data ke database me save hone se pehle aap user ko successfull registration ka message bhej dete ho which is wrong what if it was'nt be able to gat saved and there was a error

 there is no good or bad there is always use cases 
 web api browser se milegi iske alawa khi se nhi milegi
 another environment we can get apart from api is node
  
  if you have taken webapi - then you will get dom api
  for node you wont get dom api 

  task queue makes the the whole js fast ans async.

another queue - promise queue / high priority queue

jab bhi program execute hota hai uska ek call stack bnta hai
 uske andar hamara global execution context bnta hai
 uske andar ek ek kartke hamare functions load kiye jaate hai,
 jasie jaise function ka execution khtnm hota unko call stack se unload kr diya jaata hai

 asynchronous code likne me problem aati hai cause we need a mechanism for ye waal kaam karke mujhe baad me yaad dilana
 
