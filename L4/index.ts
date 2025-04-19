// Diffrerent Type of Functions

function addNumbers(a: number, b: number): number {
  return a + b;
}

const result = addNumbers(5, 10);
console.log(`The sum is: ${result}`);

function greet(name: string): void {
  console.log(`Hello, ${name}!`);
}
const greeting = greet("Alice");

// Not a Good Practice
let varFunction: Function;
varFunction = addNumbers;
const result2 = varFunction(50, 10);
console.log(`The sum is: ${result2}`);

// Good Practice
let newAddFunction: (a: number, b: number) => number;
newAddFunction = addNumbers;
const result3 = newAddFunction(20, 30);
console.log(`The sum is: ${result3}`);

// Function Type and Call Backs
type CB = (result: number) => void;
function addHandle(a: number, b: number, cb: CB) {
  let result = a + b;
  cb(result);
}

addHandle(10, 20, (result) => {
  console.log("The sum in Call Back is: ", result);
})