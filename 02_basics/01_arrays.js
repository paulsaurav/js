//Arrays

const myArr = [1, 2, 3, 4, 5]

const myArr2 = new Array(1, 2, 3, 4, 5)

const myHeros = ['spiderman', 'ironman', 'thor', 'hulk', 'captain']

// console.log(myArr[2]);

// console.log(myHeros[3]);


//methods

// myArr.push('hello')
// myArr.pop()

// myArr.unshift(5)
// myArr.shift()
// console.log(myArr.indexOf(5));

const newArr = myArr.join()

// console.log(myArr)
// console.log(newArr)

//slice & splice
 console.log("A", myArr)
 const myn1 = myArr.slice(0, 3)
console.log(myn1);
 console.log("B", myArr);

 const myn2 = myArr.splice(0, 3)
 console.log("C", myArr);
 console.log(myn2);

 /* Slice dose not take out the range part from the Array but splice takes out the range part from the Array.
 Slice range is 1 less than the given range and splice range is given in the given whole range
 */ 