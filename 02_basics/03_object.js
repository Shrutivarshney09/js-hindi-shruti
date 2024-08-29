// singleton 
// Object.create

// objest literals

const mySym = Symbol("key1")


const jsuser = {
    name: "shruti",
    "full name": "shruti varshney",
    [mySym]: "mykey1",
    age: 20,
    location: "aligarh",
    email: "shruti@gmail.com",
    isLoggedIn: false,
    lastLoginDays :["monday","saturday"]
}

// console.log(jsuser.email)
// console.log(jsuser["email"])
// console.log(jsuser["full name"])
// console.log(jsuser[mySym])

jsuser.email = "shruti@chatgpt.com"
//Object.freeze(jsuser)
jsuser.email = "shruti@microsoft.com"
//console.log(jsuser);

jsuser.greeting = function(){
console.log("hello js user");
}
jsuser.greetingTwo = function(){
    console.log(`hello js user, ${this.name}`);
    }

console.log(jsuser.greeting());
console.log(jsuser.greetingTwo());


