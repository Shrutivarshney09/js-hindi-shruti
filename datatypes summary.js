// Primitive datatype

// 7 Types : string, Number, Boolean, null, undefined, symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
//const outsideTemp = null
let userEmail;

const id = Symbol("123")
const anotherId = ("123")

//console.log(id === anotherId);

//const bigNumber = 22344556677667n



// Refrence datatype (Non primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"]
let myObj = {
    name: "shruti",
    age: 22,
}

const myfunction = function () {
    console.log("hello world");
    }

    //console.log(typeof bigNumber);
    //
    console.log(typeof outsideTemp);



//********************************//

// stack (primitive), heap (Non-primitive)

let myYoutubename = "shruti@.youtube.com"
let anothername = myYoutubename
anothername = "chaiorcode"

console.log(myYoutubename);
console.log(anothername);

let user1 = {
    email: "shreya@google.com",
    upi: "user@ybl"
}

let user2 = user1

user2.email = "shruti@123google.com"

console.log(user1.email);
console.log(user2.email);