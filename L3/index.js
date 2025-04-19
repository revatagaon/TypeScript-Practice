// Unions -> A union type describes a value that can be one of several types.
function combine(param1, param2) {
    var result;
    if (typeof param1 === "number" && typeof param2 === "number") {
        result = param1 + param2;
    }
    else {
        result = "".concat(param1, " ").concat(param2);
    }
    return result;
}
console.log(combine(10, 20));
console.log(combine("Praveen", "Revatagaon"));
// Literal Types -> They are types that allow you to specify exact values a variable can have. 
// type myType = "as-number" | "as-string";
function literalFunction(param1, param2, conversionType) {
    var result;
    if ((typeof param1 === "number" && typeof param2 === "number") || conversionType === "as-number") {
        result = +param1 + +param2;
    }
    else {
        result = "".concat(param1, " ").concat(param2);
    }
    return result;
}
console.log(literalFunction("10", "20", "as-number"));
console.log(literalFunction("Praveen", "Revatagaon", "as-string"));
function alisFunction(param1, param2, conversionType) {
    var result;
    if ((typeof param1 === "number" && typeof param2 === "number") || conversionType === "as-number") {
        result = +param1 + +param2;
    }
    else {
        result = "".concat(param1, " ").concat(param2);
    }
    return result;
}
console.log(alisFunction("10", "20", "as-number"));
console.log(alisFunction("Praveen", "Revatagaon", "as-string"));
var user = {
    firstName: "Praveen",
    lastName: "Revatagaon",
    rollNumber: 30,
    skills: ["React", "Node"],
    address: "At Post Ballolli"
};
function greet(user) {
    console.log("Hi I am ".concat(user.firstName, " ").concat(user.lastName));
}
greet(user);
