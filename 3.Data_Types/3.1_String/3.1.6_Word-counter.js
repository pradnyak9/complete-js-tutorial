function wordCount(val) {
    var wom = val.match(/\s+/g);
    // console.log(val);
    return {
        characterNoSpaces : val.replace(/\s+/g, ''),
        characters        : val.length,
        words             : wom ? wom.length + 1 : 0,
        lines             : val.split(/\r*\n/).length
    };
}

console.log("Length of '': ",wordCount("").words);
console.log("characters of '': ",wordCount("").characters);
console.log("-------------------------------------------");

console.log("Length of 'Hello World !': ",wordCount("Hello World !").words);
console.log("characters of 'Hello World !': ",wordCount("Hello World !").characters);
console.log("-------------------------------------------");

console.log("Length of 'Welcome to Javascript tutorial.': ",wordCount("Welcome to Javascript tutorial.").words);
console.log("characters of 'Welcome to Javascript tutorial.': ",wordCount("Welcome to Javascript tutorial.").characters);
console.log("-------------------------------------------");
