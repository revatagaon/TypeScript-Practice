// Unions -> A union type describes a value that can be one of several types.

function combine(param1: number | string, param2: number | string) {
  let result: any;
  if (typeof param1 === "number" && typeof param2 === "number") {
    result = param1 + param2;
  } else {
    result = `${param1} ${param2}`
  }
  return result;
}

console.log(combine(10, 20))
console.log(combine("Praveen", "Revatagaon"))

// Literal Types -> They are types that allow you to specify exact values a variable can have. 

// type myType = "as-number" | "as-string";

function literalFunction(param1: number | string, param2: number | string, conversionType: "as-number" | "as-string") {
  let result: any;
  if ((typeof param1 === "number" && typeof param2 === "number") || conversionType === "as-number") {
    result = +param1 + +param2;
  } else {
    result = `${param1} ${param2}`
  }
  return result;
}

console.log(literalFunction("10", "20", "as-number"))
console.log(literalFunction("Praveen", "Revatagaon", "as-string"))

// Type Alis Or Custom Types --> A type alias lets you create a custom name for a type.
// It’s like giving a nickname to a type — especially helpful for long or repeated types.

type MyChoice = number | string;
type MyConversion = "as-number" | "as-string";

function alisFunction(param1: MyChoice, param2: MyChoice, conversionType: MyConversion) {
  let result: any;
  if ((typeof param1 === "number" && typeof param2 === "number") || conversionType === "as-number") {
    result = +param1 + +param2;
  } else {
    result = `${param1} ${param2}`
  }
  return result;
}

console.log(alisFunction("10", "20", "as-number"))
console.log(alisFunction("Praveen", "Revatagaon", "as-string"))

// better way of writing an object is as follow

type UserSkeleton = {
  firstName: string;
  lastName: string;
  rollNumber: number;
  skills: string[];
  address: string;
}

const user: UserSkeleton = {
  firstName: "Praveen",
  lastName: "Revatagaon",
  rollNumber: 30,
  skills: ["React", "Node"],
  address: "At Post Ballolli"
}

function greet(user: UserSkeleton) {
  console.log(`Hi I am ${user.firstName} ${user.lastName}`)
}

greet(user)