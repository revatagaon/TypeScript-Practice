// Generics Intro (Syntax)
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var fruits = [];
fruits.push("Apple");
fruits.push("Banana");
fruits.push("Mango");
console.log(fruits);
var myDetails = [];
myDetails.push({ name: "John", age: 25 });
myDetails.push({ name: "Jane", age: 30 });
console.log(myDetails); // Output will be an array of objects
// Generic Function
// You can take whatever you want in place of T and U and it can take multiple parameters for multiple arguments
function merge(objA, objB) {
    return __assign(__assign({}, objA), objB);
}
var res = merge({ name: "Praveen" }, { role: "Software Engineer" });
console.log(res); // Output will be an object with properties from both objects
//  Generic Constraints
function createObject(key, value, isActive) {
    return { key: key, value: value, isActive: isActive };
}
var obj = createObject("age", 25, true);
console.log(obj);
var numberBox = { value: 200 };
var stringBox = { value: "Hello" };
console.log(numberBox);
console.log(stringBox);
var response = { data: "Success", status: 200 }; // Default to String
var jsonRes = { data: { name: "Praveen" }, status: 200 };
console.log(response);
console.log(jsonRes);
// We can define our type and passed it to the "User" interface
// Genereic with class
var Container = /** @class */ (function () {
    function Container(content) {
        this.content = content;
    }
    Container.prototype.getContent = function () {
        return this.content;
    };
    return Container;
}());
var stringContainer = new Container("Hello");
var numberContainer = new Container(100);
console.log(stringContainer.getContent());
console.log(numberContainer.getContent());
// Generic with Array
function getFirst(arr) {
    return arr[0];
}
var firstNumner = getFirst([1, 2, 3, 4, 5]);
var firstString = getFirst(["a", "b", "c"]);
console.log(firstNumner);
console.log(firstString);
// Generic with keyof
// function getProperty(obj:object, key:string){
//   return obj[key]
// }
// const res1 = getProperty({}, "name")
// console.log(res1); // Output will be undefined
// The above code will not work because the key is not defined in the object
// The correct code is below
function getProprty(obj, key) {
    return obj[key];
}
var resultName = getProprty({ name: "Praveen", age: 25 }, "name");
var resultAge = getProprty({ name: "Praveen", age: 25 }, "age");
console.log(resultName); // Output will be "Praveen"
console.log(resultAge); // Output will be 25
