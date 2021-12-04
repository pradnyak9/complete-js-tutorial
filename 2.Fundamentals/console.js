/**
 * console Javascript object that can be consulted through console.dir(console). Besides the console.memory
 * property, the methods displayed are generally the following (taken from Chromium's output):
 * assert
 * clear
 * count
 * debug
 * dir
 * dirxml
 * error
 * group
 * groupCollapsed
 * groupEnd
 * info
 * log
 * markTimeline
 * profile
 * profileEnd
 * table
 * time
 * timeEnd
 * timeStamp
 * timeline
 * timelineEnd
 * trace
 * warn 
 */

/**
 * console.time() can be used to measure how long a task in your code takes to run.
 * Calling console.time([label]) starts a new timer. When console.timeEnd([label]) is called, the elapsed time, in
 * milliseconds, since the original .time() call is calculated and logged. Because of this behavior, you can call
 * .timeEnd() multiple times with the same label to log the elapsed time since the original .time() call was made.
 */

// Measuring time - console.time()
console.log("#1.Measuring time - console.time()");

/**
 * console.time() can be used to measure how long a task in your code takes to run.
 * Calling console.time([label]) starts a new timer. When console.timeEnd([label]) is called, the elapsed time, in
 * milliseconds, since the original .time() call is calculated and logged. Because of this behavior, you can call
 * .timeEnd() multiple times with the same label to log the elapsed time since the original .time() call was made
 */

console.time('Time starts');
console.timeEnd('Time starts');
console.time('For loop time');
let j;
for(var i=0; i<=10; i++) {
    j = j*i;
}
console.timeEnd('For loop time');

console.log("----------------------------------");
// Formatting console output
console.log("#2. Formatting console output");
// Many of the console's print methods can also handle C-like string formatting, using % tokens:
console.log("%s has %d points", 'Pradnya', 10);
/**
 * %s Formats the value as a string
 * %i or %d Formats the value as an integer
 * %f Formats the value as a floating point value
 * %o Formats the value as an expandable DOM element
 * %O Formats the value as an expandable JavaScript object
 * %c Applies CSS style rules to the output string as specified by the second parameter
 */

console.log("Applying styles:");
/**
 * When the CSS format specifier (%c) is placed at the left side of the string, the print method will accept a second
 * parameter with CSS rules which allow fine-grained control over the formatting of that string:
 */

console.log('%cHello world!','color:blue; font-size: xx-large');

console.log("----------------------------------");
/**
 * It is possible to use multiple %c format specifiers:
 * any substring to the right of a %c has a corresponding parameter in the print method;
 * this parameter may be an empty string, if there is no need to apply CSS rules to that same substring;
 * if two %c format specifiers are found, the 1st (encased in %c) and 2nd substring will have their rules defined in
 * the 2nd and 3rd parameter of the print method respectively.
 * if three %c format specifiers are found, then the 1st, 2nd and 3rd substrings will have their rules defined in
 * the 2nd , 3rd and 4th parameter respectively, and so on...
 * console.log("%cHello %cWorld%c!!", // string to be printed
 * "color: blue;", // applies color formatting to the 1st substring
 * "font-size: xx-large;", // applies font formatting to the 2nd substring
 * "/* no CSS rule*",  // does not apply any rule to the remaining substring
 */
console.log("%cHello %cWorld%c!!!", "color: blue", "font-size: xx-large", "/*no css rule*/");
 
console.log("----------------------------------");

console.log("#3. Tabulating values");
//In most environments, console.table() can be used to display objects and arrays in a tabular format.
console.table("Tabulating array: ");
console.table(['hello', 'world']);

console.table("Tabulating object: ");
console.table({foo: 'foo', bar: 'bar'});

console.table("Tabulating Array of objects: ");
var personList = [
    {
        firstname: 'pradnya',
        lastname: 'khairnar',
        age: 26,
        city: 'Nashik',
        phoneNo: '7756879089'
    },
    {
        firstname: 'pradnya',
        lastname: 'khairnar',
        age: 26,
        city: 'Nashik',
        phoneNo: '7756879089'
    },
    {
        firstname: 'pradnya',
        lastname: 'khairnar',
        age: 26,
        city: 'Nashik',
        phoneNo: '7756879089'
    },
    {
        firstname: 'pradnya',
        lastname: 'khairnar',
        age: 26,
        city: 'Nashik',
        phoneNo: '7756879089'
    }
];
console.table(personList);

console.table("Show only required columns:");
console.table(personList, ['firstname', 'lastname']);

console.log("----------------------------------");
console.log("#4. Couting - console.count()");
/**
 * console.count([obj]) places a counter on the object's value provided as argument. Each time this method is
 * invoked, the counter is increased (with the exception of the empty string ''). A label together with a number is
 * displayed in the debugging console according to the following format:
 * 
 * [label]: X
 * label represents the value of the object passed as argument and X represents the counter's value.
 * 
 */
var o1 = 1, o2 = '2', o3 = "";

console.count(o1);
console.count(o2);
console.count(o3);

console.count(1);
console.count('2');
console.count("");
// Functions count
console.count(console.constructor);
console.count(Object);
console.count(function(){});
var fun1 = function () {};
console.count(fun1);
console.count(Number);

console.count(undefined);
// console.count(document.Batman);
var obj;
console.count(obj);
console.count(Number(undefined));
console.count(NaN);
console.count(NaN+3);
console.count(1/0);
console.count(String(1/0));
// console.count(window);
// console.count(document);
console.count(console);
console.count(console.__proto__);
console.count(console.constructor.prototype);
console.count(console.__proto__.constructor.prototype);
console.count(Object.getPrototypeOf(console));
console.count(null);
console.log();

// Empty strings or absence of argument
console.log("*Empty strings or absence of argument:");
console.count();
console.count('');
console.count("");

// Clearing console
console.log("Clearing console");
console.clear();

console.log("Displaying objects and XML interactively - console.dir(), console.dirxml()");
/**
 * console.dir(object) displays an interactive list of the properties of the specified JavaScript object. The output is
 * presented as a hierarchical listing with disclosure triangles that let you see the contents of child objects.
 */

var myObject = {
    'foo' : {
        "bar": "data"
    }
};
// Try in browser's console
console.dir(myObject); 
console.log(myObject);

console.log("*Using Console.dirxml()");

/**
 * console.dirxml(object) prints an XML representation of the descendant elements of object if possible, or the
 * JavaScript representation if not. Calling console.dirxml() on HTML and XML elements is equivalent to calling console.log().
 */
// console.dirxml(document);
console.dirxml(myObject);

console.log("#4. Debugging with assertions - console.assert()")

/**
 * Debugging with assertions - console.assert()
 * Writes an error message to the console if the assertion is false. Otherwise, if the assertion is true, this does nothing.
 */
console.assert('one' === 1); // This will print 'Assertion failed' on browser/terminal
console.assert('one' === 'one'); // This will print nothing
