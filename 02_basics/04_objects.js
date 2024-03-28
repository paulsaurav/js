// singleton

const tinderUser = new Object()
tinderUser.id = "123"
tinderUser.age = 25
tinderUser.isLoggedIn = true
tinderUser.name = {
    firstName: "Saurav",
    lastName: "Paul"
}
tinderUser.number = {
    primaryNumber: Number(7002909568),
    secondaryNumber: String(917002909568)
}

// console.log(tinderUser);
// console.log(typeof tinderUser.number.secondaryNumber);


const obj1 = {
    1: "A",
    2: "B"
}

const obj2 = {
    3: "A",
    4: "B"
}

// const newObj = {    //Spread operator
//     ...obj1,
//     ...obj2
// }

const newObj = Object.assign({},obj1, obj2)

// console.log(newObj);

const users = [
    {
    id: 1,
    email: "test@test.com"
    },
    {
        id: 2,
        email: "test@test.com"
        },
        {
            id: 3,
            email: "test@test.com"
            }
]

const print = users[1].email
// console.log(print);
// console.log(tinderUser);
// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));
console.log(tinderUser.hasOwnProperty("saurav"));