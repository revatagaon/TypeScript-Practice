// Objects, Arrays, Tuples and Enum

// Nested Object
// const person: {
//   firstName: string;
//   age: number;
//   xyz: {
//     address: string
//   }
// } = {
//   firstName: "Praveen",
//   age: 32,
//   xyz: {
//     address: "Ballolli"
//   }
// }

const person: {
  firstName: string;
  age: number;
  skills: string[]
} = {
  firstName: "Praveen",
  age: 32,
  skills: ["React JS", "Node JS"]
}

// console.log(person.lastName)
// When you runs this code, following error will be occured
// index.ts:9:18 - error TS2339: Property 'lastName' does not exist on type '{ firstName: string; age: number; }'.

console.log(person)

// Arrays
let knownLanguage: string[] = ["Kannada", "English", "Hindi", "Telugu", "Marathi"];

// it can also be written as
// let knownLanguage:string[];
// knownLanguage = ["Kannada", "English", "Hindi", "Telugu","Marathi"];

// if we want to keep any data type in an array then we need to use key as "any"
// when you use key "any" then there is no point using TypeScript, as it will loose the power of idetifying errors

let allData: any[] = ["String", 12, new Date(), true]

// Tuple : It is a finite ordered list of elements that can have different data types

const details: {
  name: string;
  age: number;
  skills: string[];
  product: [number, string]; // Tuple
} = {
  name: "Praveen",
  age: 32,
  skills: ["ReactJs", "NodeJS"],
  product: [45, "Valid String"]
}

// Enum
enum Role { ADMIN, AUTHOR, READ_ONLY }

const object2: {
  name: string;
  age: number;
  skills: string[];
  role: Role;
} = {
  name: "Praveen",
  age: 32,
  skills: ["ReactJs", "NodeJS"],
  role: Role.ADMIN
}

// Enum use case
if (object2.role === Role.ADMIN) {
  console.log("Admin Logged")
} else if (object2.role === Role.AUTHOR) {
  console.log("Author Logged")
}