// Singleton

//Object Literals

const mySym = Symbol("Key1");

const JsUser = {
    name: "Saurav",
    "full name": "Saurav Paul",
    [mySym]: "myKey1",
    age: 25,
    location: "Assam",
    email: "sauravpaul03@gmail.com",
    isLoggedIn: false,
    lastLoginDays:["Monday", "Saturday"]
}

// console.log(JsUser.age)
// console.log(JsUser["full name"]);

console.log(JsUser);
JsUser.age = 26
Object.freeze(JsUser)
JsUser.age = 27
console.log(JsUser);