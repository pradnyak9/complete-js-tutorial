console.log("################################################");
console.log("Section 3.1.8: Splitting a string into an array");
console.log("################################################");

// Use .split to go from strings to an array of the split substrings:
var str = "one, two, three, four, five";

console.log("Splitting string into array with ,",str.split(','));
console.log("Joining array elements with -- ",str.split(',').join("--"));
