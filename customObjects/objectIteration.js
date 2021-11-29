
let employee = { firstname: 'Pradnya', lastname: 'Khairnar', age: 27};
console.log("----------------------------------");
console.log("|        Object iteration        |");
console.log("----------------------------------");
console.log("Before ES6 using for...in loop: ");

for(let key in employee){
    console.log(key + ": " + employee[key]);
}
console.log("----------------------------------");

console.log("After ES6 ");
console.log("#1. Using Object.keys(employee): ");
Object.keys(employee).forEach((key) => {
    console.log(key + ": "+ employee[key]);
});

console.log("----------------------------------");
console.log("#2. Using Object.values(employee): ");
Object.values(employee).forEach((value) => {
    console.log(value);
});

console.log("----------------------------------");
console.log("#3. Using Object.entries(employee): ");
Object.entries(employee).forEach((arr, i) => {
    console.log((i+1) + "."+arr[0]+ ": "+arr[1]);
});