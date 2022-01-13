/**
 * Section 3.2.2: Reducing values
 * The reduce() method applies a function against an accumulator and each value of the array (from left-to-right) to
 * reduce it to a single value.
 */


// Array sum

let sum = [1, 2, 3, 4, 5].reduce((a, b) => {
    console.log("a: "+a, "b: "+b);
    return a + b;
});

console.log("Sum of array elements using array.reduce: "+sum);

/**
 * Optional second parameter can be passed to reduce(). Its value will be used as the first argument (specified as a)
 * for the first call to the callback (specified as function(a, b)).
 */
let anotherSum = [2, 3].reduce((a, b) => {
    console.log("a: "+a, "b: "+b);
    return a + b;
}, 1);

console.log(anotherSum); // 6


let array = [
    { key: 'one', value: 1 },
    { key: 'two', value: 2 },
    { key: 'three', value: 3 },
    { key: 'four', value: 4 }
];

// Flatten array of objects into a single object

// version <= 5.1
let flattenArray = array.reduce((obj, current) => {
    obj[current.key] = current.value;
    return obj;
}, {});

console.log(flattenArray); // { one: 1, two: 2, three: 3, four: 4 }

// Version >= 6
flattenArray = array.reduce((obj, current) => Object.assign(obj, {
    [current.key]: current.value
}), {});

console.log(flattenArray); // { one: 1, two: 2, three: 3, four: 4 }

// Version >= 7

flattenArray = array.reduce((obj, current) => ({ ...obj, [current.key]: current.value}), {});
console.log(flattenArray); // { one: 1, two: 2, three: 3, four: 4 }

// Map Using Reduce
