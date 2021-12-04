/**
 * Section 3.1.2 Reverse String
 */
console.log("#############################");
console.log("Section 3.1.2 Reverse String");
console.log("#############################");
// The most "popular" way of reversing a string in JavaScript is the following code fragment, which is quite common:

function reverseString(str) {
    return str.split('').reverse().join('');
}

var reversedString = reverseString('Hello');
console.log("String reverse using function: ",reversedString);

console.log("Stepwise reversal of string: ")

console.log("Step1: str.split(')  - ",'Hello'.split(''));
console.log("Step2: str.reverse() - ", 'Hello'.split('').reverse());
console.log("Step3: str.join('')  - ",'Hello'.split('').reverse().join(''));

// Using spread operator Version >= 6
console.log("-------------------------------------------");
console.log("Using spread operator");
console.log("-------------------------------------------");

function reverseUsingSpreadOpr(str) {
    return [...String(str)].reverse().join('');
}

var reversedStringUsingSpreadOpr = reverseUsingSpreadOpr('Hello World');
console.log("String reversal Using Spread Operator: ", reversedStringUsingSpreadOpr);

// Custom reverse function
console.log("-------------------------------------------");
console.log("Custom reverse function");
console.log("-------------------------------------------");

function customReverseFun(str) {
    let revStr = "";
    for( let i = str.length - 1; i >= 0; i--){
        revStr += str[i];
    }
    return revStr;
}

var customReverseString = customReverseFun('Hello');
console.log("Custom reverse function: ",customReverseString);