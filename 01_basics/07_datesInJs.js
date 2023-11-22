//Dates

let myDate = new Date()
// console.log(myDate.toString());
// console.log(myDate.toTimeString());
// console.log(myDate.toDateString());
// console.log(myDate.toISOString());
// console.log(myDate.toLocaleString('en-IN'));

// let myNewDate = new Date('2023, 2, 27')
let myNewDate = new Date('2023-02-27')
// let myNewDate = new Date(2023, 2, 27, 10, 50)

// console.log(myNewDate.toLocaleString());

let myTimeStamp = Date.now()
// console.log(myTimeStamp);
// console.log(myNewDate.getTime());
// console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate.getDay('en-IN'));

let check = newDate.toLocaleString('default', {
    weekday : "long",
    timeZoneName : "short",
    hour12 : true,
    hour : "numeric",
    minute : "numeric",
})

console.log(check);