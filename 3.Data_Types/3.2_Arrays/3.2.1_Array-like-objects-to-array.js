/**
 * Section 3.2.1: Converting Array-like Objects to Arrays
 * JavaScript has "Array-like Objects", which are Object representations of Arrays with a length property. For example:
 */

// let realArray = [1, 2, 3, 4];
// console.log(realArray);

let arrayLike = {
    0: 1,
    1: 2,
    2: 3,
    length: 3
};
console.log("arrayLike: "+arrayLike);

// throws error
// arrayLike.forEach(element => { console.log(element)}); 

/** Convert Array-like Objects to Arrays in ES6 */

// 1. Array.from
const realArray = Array.from(arrayLike);
console.log("Elements of arrayLike after converting to array by Array.from: ");
realArray.forEach((element) => { console.log(element)});


// 2. for...of --> This gives error as arrayLike is not iterable
// var realArray1 = [];
// for(const element of arrayLike) {
//     realArray.append(realArray1);
// }

// console.log("Array after converting using for...of: "+realArray1);

// 3. Spread operator

// console.log([...arrayLike]); .....Gives error as arrayLike is not iterable

// 4. Object.values
console.log(Object.values(arrayLike)); // [ 1, 2, 3, 3 ]

// 5. Object.keys
console.log(Object.keys(arrayLike).map((key) => arrayLike[key])); // [ 1, 2, 3, 3 ]

// Version ES5

let realArray2 = Array.prototype.slice.call(arrayLike);
realArray2 = [].slice.call(arrayLike); // shorthand version
console.log(realArray2); // [ 1, 2, 3]

console.log(realArray2.indexOf(2)); // if found then 1 else -1.

// You can also use [].method.bind( arrayLikeObject ) to borrow array methods and glom them on to your object:

[].forEach.bind(arrayLike)(function(val) {
    console.log({val});
});

// In ES6, while using Array.from, we can specify a map function that returns a mapped value for the new array being created.
let arrayLike1 = {
    0: { name: 'Pradnya', age: 27 },
    1: { name: 'Vivek', age: 23 },
    2: { name: 'Pratima', age: 27 }
};

console.log(Array.from(arrayLike, ele => ele + 1));







