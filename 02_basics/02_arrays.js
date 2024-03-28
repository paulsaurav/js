const  marvel_heros = ["Thor", "Ironman", "Spiderman"]
const dc_heros = ["Superman", "Batman", "Flash"]
const indianHeros = ["Ram", "Shyam", "Hari"]

// marvel_heros.push(dc_heros)
// const new_heros = marvel_heros.concat(dc_heros)

// console.log(new_heros)

const allHeros = [...marvel_heros, ...dc_heros, ...indianHeros]

// console.log(allHeros)

const newArray = [1, 2, 3, [4, 5, 6], 7,[6,7,[4,5]]]

const usableArray = newArray.flat(Infinity)

// console.log(usableArray);

// console.log(Array.isArray("Saurav"));
// console.log(Array.from("Saurav"));

let score1 = 50
let score2 = 60
let score3 = 70

console.log(Array.of(score1, score2, score3));