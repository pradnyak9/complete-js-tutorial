// If your string is enclosed (i.e.) in single quotes you need to escape the inner literal quote with backslash \

var text = 'L\' albero means a tree in Italian';
console.log("Printing single quote inside a string: ",text);

var anotherText = "I feel \"High\"";
console.log("Printing double quote inside a string: ",anotherText);

/**
 * Special attention must be given to escaping quotes if you're storing HTML representations within a String, since
 * HTML strings make large use of quotations i.e. in attributes
 */

var content = "<p class=\"sampleClass\">This is a paragraph<p>";
console.log(content);

var helloString = '<p> I\'d like to say hi! </p>';
console.log(helloString);

// Quotes in HTML strings can also be represented using &apos; (or &#39;) as a single quote and &quot; ( or &#34;) as
// double quotes.

// %%%%%%%%%%%%% This is not working somehow %%%%%%%%%%%%%%%
var quoteString = "<p class='special'> &quot;Hi&quot;</p>"; 
console.log(quoteString);
// %%%%%%%%%%%%% This is not working somehow %%%%%%%%%%%%%%%