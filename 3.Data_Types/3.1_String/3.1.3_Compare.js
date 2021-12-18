console.log("Section 3.1.3: Comparing Strings Lexicographically");
/**
 * To compare strings alphabetically, use localeCompare(). This returns a negative value if the reference string is
 * lexicographically (alphabetically) before the compared string (the parameter), a positive value if it comes
 * afterwards, and a value of 0 if they are equal.
 */

var a = "Hello";
var b = "World";

console.log("Comparision using a.localeCompare(b): ",a.localeCompare(b));
console.log();
/**
 * The > and < operators can also be used to compare strings lexicographically, but they cannot return a value of zero
 * (this can be tested with the == equality operator). As a result, a form of the localeCompare() function can be
 * written like so:
 */

function strCmp(a, b) {
    if ( a == b) {
        return true;
    } 
    
    if ( a > b) {
        return false;
    } 
    return false;
}
console.log("String comparision using <, >");
console.log("Comparing 'Hello' & 'World' ",strCmp('Hello', 'World'));
console.log("Comparing 'Hello' & 'Hello' ",strCmp('Hello', 'Hello'));
console.log("Comparing 'Hello' & 'hello' ",strCmp('Hello', 'hello'));

/**
 * This is especially useful when using a sorting function that compares based on the sign of the return value (such as sort).
 */

console.log("Sorting array: ");
var arr = ["Banana", "Cherry", "Apple"];

arr.sort(function(a, b) {
    return a.localeCompare(b);
});

console.log("Sorting of array using localCompare: ",arr);