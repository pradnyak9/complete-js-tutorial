console.log("################################################");
console.log("Section 3.1.9: Strings are unicode");
console.log("################################################");

// All JavaScript strings are unicode!

var str = "Hello world!";

console.log(str.charCodeAt(3));

// There are no raw byte or binary strings in JavaScript. To effectively handle binary data, use Typed Arrays.