const name = "shruti"
const repoCount = 50

//console.log(name + repoCount + "value");

console.log(`hello my name is ${name} and my repo count is ${repoCount}`);

// string decleration 2nd type
const gameName = String("shruti-var-shney")
console.log(gameName[0]);
console.log(gameName.__proto__);


// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(3));
//console.log(gameName.indexOf("t"));
const newString = gameName.substring(0,4)
console.log(newString);

const anotherString = gameName.slice(-8,4)
console.log(anotherString);

const newStringOne = "   shruti   "
console.log(newStringOne);
console.log(newStringOne.trim()); 

const url = "https://shreya.com/shruti%20varshney"

console.log(url.replace('%20','-'));

console.log(url.includes('gupta'));

console.log(gameName.split('-'));