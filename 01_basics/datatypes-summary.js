// Premitive Datatypes
// 1. Number
// 2. String
// 3. Boolean
// 4. BigInt
// 5. Null
// 6. Undefined
// 7. Symbol


//Reference Datatypes
// 1. Object
// 2. Function
// 3. Array


const id = Symbol('123')
const anotherId = Symbol('123')


// console.log(id === anotherId)


//Array
const heros = ["Batman", "Superman", "Spiderman"]

//Object
let myObj = {
    name : "Saurav",
    age : 25,
    isLoggedIn : false
}

//Function
const myFunction = function(){
    console.log("Hello World");
}

// console.log(myFunction);



let var1 = "Saurav"
let var2 = var1

// console.log(var1);
// console.log(var2);

let userOne = {
    username : "Saurav",
    number : 7002909568,
    mail : "sauravpaul03@gmail.com"
}

let userTwo = userOne

userTwo.number = 917002909568 

console.log(userOne.number)
console.log(userTwo.number)
console.log(userOne)
