// Diffrerent Type of Functions
function addNumbers(a, b) {
    return a + b;
}
var result = addNumbers(5, 10);
console.log("The sum is: ".concat(result));
function greet(name) {
    console.log("Hello, ".concat(name, "!"));
}
var greeting = greet("Alice");
// Not a Good Practice
var varFunction;
varFunction = addNumbers;
var result2 = varFunction(50, 10);
console.log("The sum is: ".concat(result2));
// Good Practice
var newAddFunction;
newAddFunction = addNumbers;
var result3 = newAddFunction(20, 30);
console.log("The sum is: ".concat(result3));
// Function Type and Call Backs
function addHandle(a, b, cb) {
    var result = a + b;
    cb(result);
}
addHandle(10, 20, function (result) {
    console.log("The sum in Call Back is: ", result);
});
