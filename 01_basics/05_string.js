const name = "Saurav"
const repoCount = 25

// console.log(name + "has "+ repoCount + " repositories"); //old method

// console.log(`${name} has ${repoCount} repositories`) // modern method

const inGameName = new String("Sam_1997")

// console.log(inGameName[2]);
// console.log(inGameName.__proto__)
// console.log(inGameName.length)
// console.log(inGameName.toUpperCase())
// console.log(inGameName.charAt(1))
// console.log(inGameName.indexOf("a"))

const newInGameName = inGameName.substring(0, 4)

// console.log(newInGameName);

const anotherInGameName = inGameName.slice(-7, 4)

// console.log(anotherInGameName);

const newString = "             saurav.                 "
// console.log(newString);
// console.log(newString.trim());

const url = "https://saurav.com/my%20profile"
// console.log(url);
// console.log(url.replace("%20", "-"))
// console.log(url.includes("nasdn"))

const splitCheck = "my name is saurav paul"
console.log(splitCheck.split(" "));

