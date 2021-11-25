/**
 * JS Data types - String, Number, Boolean, Object, Null, Undefined
 *
 * Numbers in JS represent both Integer as well as floating point values.
 *
 * String values can be created using both single ('') or double("") quotes.
 *
 * Type of variable is decided on the type of value it holds.
 *
 * null represents an explicit value to represent nothing.
 *
 * Undefined: Variable which is declared but not initialized has data type undefined.
 */

/**
 * Operators- basics
 * 1. Strict equal
 * 2. Concatenation
 * 3. typeOf
 * 4. Exponentiation
 *
 */
console.log('**********************operators***************************');

let num1 = 5;
let num2 = '5';

// The eqality operator checks for only value not the data type.
console.log('Example of == operator ', num1 == num2);

// To compare both the data value and type, strict equal or '===' operator is used.
console.log('Example of === operator ', num1 === num2);

// '+' operator
console.log('+ operator with both number: 5 + 5 =', 5 + 5);

console.log("+ operator with both string: '5' + '5' =", '5' + '5');

console.log("+ operator with one number and other string: 5 + '5' =", 5 + '5');

// 'typeof' operator - we can get type of variable
console.log('Type of 5: ', typeof 5);
console.log("Type of '5': ", typeof '5');
console.log('Type of Date: ', typeof new Date());

// console.log("Type of 5: ",typeof null);
// console.log("Type of 5: ",typeof undefined);
