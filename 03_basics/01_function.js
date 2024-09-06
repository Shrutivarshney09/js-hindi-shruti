
function sayMyName(){
console.log("s");
console.log("h");
console.log("r");
console.log("u");
console.log("t");
console.log("i");
}

// sayMyName()

//function addTwoNumbers(number1, number2){
  //  console.log(number1 + number2);

//}

function addTwoNumbers(number1, number2){
  // let result = number1 + number2
   //return result
   
   return number1 + number2
}

const result = addTwoNumbers(5, 8)

//console.log("Result: ", result);


function loginUserMessage(username = "shreya"){
   if(!username){
      console.log("please enter a username");
     return
    }
    return `${username} just logged in`
}

//console.log(loginUserMessage("shruti"));
console.log(loginUserMessage("shruvi"));

