console.log("Section 3.1.4: Access character at index in string");
/**
 * Use charAt() to get a character at the specified index in the string.
 */
var string = "Hello world!";
console.log("Character at 4th location in 'Hello world!'",string.charAt(4));

// Alternatively, because strings can be treated like arrays, use the index via bracket notation.
console.log("Using bracket notation: ",string[4]);

// To get the character code of the character at a specified index, use charCodeAt().
console.log("Using charCodeAt: ",string.charCodeAt(4));

/**
 * Note that these methods are all getter methods (return a value). Strings in JavaScript are immutable. In other
 * words, none of them can be used to set a character at a position in the string.
 */
