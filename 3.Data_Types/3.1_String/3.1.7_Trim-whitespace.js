// To trim whitespace from the edges of a string, use String.prototype.trim:

console.log("################################################");
console.log("Section 3.1.7: Trim whitespace");
console.log("################################################");

/**
 * Many JavaScript engines, but not Internet Explorer, have implemented non-standard trimLeft and trimRight
 * methods. There is a proposal, currently at Stage 1 of the process, for standardised trimStart and trimEnd
 * methods, aliased to trimLeft and trimRight for compatibility.
 */

console.log("   Trimming string using trim()    ".trim());

console.log("   Trimming string using trimStart()    ".trimStart());
console.log("   Trimming string using trimEnd()    ".trimEnd());

// Non-standard methods, but currently implemented by most engines
console.log("   Trimming string using trimLeft()    ".trimLeft());
console.log("   Trimming string using trimRight()    ".trimRight());
