console.log("################################################");
console.log("Section 3.1.10: Detecting a string");
console.log("################################################");

// To detect whether a parameter is a primitive string, use typeof:

var aString = "Pradnya";
var anInt =  27;
var anObj = {};

console.log(typeof aString === 'string'); // true
console.log(typeof anInt === 'string'); // false
console.log(typeof anObj === 'string'); // false

// If you ever have a String object, via new String("somestr"), then the above will not work. In this instance, we can
// use instanceof:

var objString = new String('Hello Pradnya');

console.log("Detecting string created using new keyword- objString instanceof String : ",objString instanceof String);

// To cover both instances, we can write a simple helper function:

function detectString(value) {
    return typeof value === 'string' || value instanceof String;
}

console.log(detectString("Pradnya")); // true
console.log(detectString(23)); // false
console.log(detectString(new String("Pradnya"))); // true
console.log(detectString({})); // false
console.log(detectString(true)); // false
console.log(detectString([])); // false

/**
 * Or we can make use of toString function of Object. This can be useful if we have to check for other types as well
 * say in a switch statement, as this method supports other datatypes as well just like typeof.
 */

console.log("------------------------------------");
var str = "Hello world";
var objStr = "Welcome to Nashik."

console.log(Object.prototype.toString.call(str));
console.log(Object.prototype.toString.call(objStr));
console.log(Object.prototype.toString.call(23));
console.log(Object.prototype.toString.call({}));
console.log(Object.prototype.toString.call(true));
console.log(Object.prototype.toString.call([]));
// console.log(Object.prototype.toString.call());



