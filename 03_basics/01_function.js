
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
//console.log(loginUserMessage("shruvi"));

function calculateCartPrice(val1, val2, ...num1){
  return num1
}

//console.log(calculateCartPrice(200, 300, 500))


const user = {
  username: "shruti",
  price: 999
}

function handleObject(anyobject){
  console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);
  }

 // handleObject(user)
  handleObject({
    username: "shrvi",
    price: "199"
  })

  const myNewArray = [200, 1000, 600, 800]

  function returnSecondValue(getArray){
    return getArray[1]
  }

  // console.log(returnSecondValue(myNewArray));
  console.log(returnSecondValue([200, 1000, 600, 800]));


  