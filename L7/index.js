// Type Guards
function add(a, b) {
    // here the if condition is a type guard 
    if (typeof a === 'string' || typeof b === 'string') {
        return a.toString() + b.toString();
    }
    return a + b;
}
console.log(add(10, 50));
console.log(add('10', 50));
console.log(add('10', '50'));
var emp1 = {
    name: "Praveen Revatagaon",
    privilages: ["Create-Server"],
    startDate: new Date()
};
function printEmployeeInfo(emp) {
    console.log("Name : ", emp.name);
    // console.log("Start Date : ", emp.startDate); 
    // We are getting error here because "emp" does not know exactly what is coming like Employee or Admin type.
    // To prevent this error, handled in type guard 
    // the following if is wrong as we can get the empty object or object with different key values so its wrong code written
    // if (typeof emp === "object") {
    //   console.log(emp.privilages);
    // }
    // actual type guard is written below
    if ("privilages" in emp) {
        console.log(emp.privilages);
    }
    if ("startDate" in emp) {
        console.log(emp.startDate);
    }
}
printEmployeeInfo(emp1);
printEmployeeInfo({ name: "Sangu", startDate: new Date() });
// Type Guards in Classes
var Car = /** @class */ (function () {
    function Car() {
    }
    Car.prototype.drive = function () {
        console.log("Driving a car...");
    };
    return Car;
}());
var Truck = /** @class */ (function () {
    function Truck() {
    }
    Truck.prototype.drive = function () {
        console.log("Driving a truck...");
    };
    Truck.prototype.loadcargo = function (amount) {
        console.log("Loading cargo...", amount);
    };
    return Truck;
}());
var v1 = new Car();
var v2 = new Truck();
function useVehicle(action) {
    action.drive();
    // action.loadcargo(1000);
    // Here we are getting error because the action is of type Vehicle and it does not know if it is a Truck or Car
    // Here we are checking if the action is of type Truck or not using Type Guard
    if ("loadcargo" in action) {
        action.loadcargo(1000);
    }
    // OR
    if (action instanceof Truck) {
        action.loadcargo(100);
    }
}
useVehicle(v1);
useVehicle(v2);
// Type Casting or Type Assertion
// on hovring on "userInput" we can see "const userInput: HTMLElement | null", it is called inference type or inferred type
// meaning it HTML element or null
// but we know that it is not null so we can use type assertion to tell the compiler that it is not null
// const userInput = <HTMLInputElement> document.getElementById("user_input")!;
// OOOOOOORRRRRRRR
var userInput = document.getElementById("user_input");
// <HTMLInputElement> is known as type assertion or type casting
userInput.value = "Hello World!";
