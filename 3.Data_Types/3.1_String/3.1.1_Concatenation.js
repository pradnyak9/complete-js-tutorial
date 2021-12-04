/**
 * Section 3.1: Basic Info and String Concatenation 
 * Strings in JavaScript can be enclosed in Single quotes 'hello', Double quotes "Hello" and (from ES2015, ES6) in
 * Template Literals (backticks) `hello`.
 */
 console.log("################################################")
console.log("Section 3.1: Basic Info and String Concatenation");
console.log("################################################")
var hello = "Hello", world = 'World', helloW = `Hello World`;

console.log(hello, world, helloW);

// Strings can be created from other types using the String() function.
console.log("-------------------------------------------");
console.log("Creation of string using String() function");
console.log("-------------------------------------------");
var intString = String(12);
console.log("Int string: ",intString);

var booleanString = String(true);
console.log("Boolean string:",booleanString);

var nullString = String(null);
console.log("Null string: ",nullString);

//Or, toString() can be used to convert Numbers, Booleans or Objects to Strings.
console.log("-------------------------------------------");
console.log("Creation of string using toString() method");
console.log("-------------------------------------------");

console.log("Integer toString: ",(123).toString() + " & Data Type: ",typeof (123).toString());
console.log("Boolean toString: ",(true).toString() + " & Data Type: ",typeof (true).toString());
console.log("Object toString: ",({}).toString() + " & Data Type: ",typeof ({}).toString());

// Strings also can be created by using String.fromCharCode method.
console.log("----------------------------------------------------");
console.log("Creation of string using String.fromCharCode method");
console.log("----------------------------------------------------");

console.log("String.fromCharCode(97, 98, 99, 100, 101, 102): ",String.fromCharCode(97, 98, 99, 100, 101, 102));
console.log("String.fromCharCode(104,101,108,108,111): ",String.fromCharCode(104,101,108,108,111)); //"hello"

/**
 * Creating a String object using new keyword is allowed, but is not recommended as it behaves like Objects unlike
 * primitive strings.
 */
//  console.log("----------------------------------------------------");
console.log("****************************************************");

 console.log("Creation of string using new keyword");
 console.log("****************************************************");

 
 var objectString = new String('I am sttring using new keyword!');
 console.log("String using new keyword: ",objectString);
 console.log("Type of string using new keyword: ",typeof objectString);
 console.log("Type of value of new keyword string: ",typeof objectString.valueOf());

 console.log("----------------------------------------------------");
 console.log("Concatenating String");
 console.log("----------------------------------------------------");
/**
 * String concatenation can be done with the + concatenation operator, or with the built-in concat() method on the
 * String object prototype.
 */

var foo = "Foo", bar = "Bar";
console.log("Concatenation using `+ operator`: ", foo + bar);
console.log("Concatenation using `+ operator` with space: ", foo + " " + bar);
console.log("Concatenation using `concat` : ", foo.concat(bar));
console.log("Concatenation using `concat` with space: ", "a".concat(" ", "b", " ", "d"));

// Strings can be concatenated with non-string variables but will type-convert the non-string variables into strings.

var string = 'hello', number = 32, boolean = true;
console.log("Concatenating non-string variables: ",string+number+boolean);

// Strings can be created using template literals (backticks) `hello`.
console.log("----------------------------------------------------");
console.log("String templates");
console.log("----------------------------------------------------");

var mostBeautifulPlace = `Nashik`;
// With template literals, you can do string interpolation using ${variable} inside template literals:
var welcomeMsg = `Welcome to ${mostBeautifulPlace}!`;
console.log(welcomeMsg);

// You can use String.raw to get backslashes to be in the string without modification.
console.log("----------------------------------------------------");
console.log("You can use String.raw to get backslashes to be in the string without modification.");
console.log("----------------------------------------------------");
// console.log(String.raw`a//b`); // test in browser's console. It prints 'a//b'
