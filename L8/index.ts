// Generics Intro (Syntax)

const fruits: Array<string> = [];

fruits.push("Apple");
fruits.push("Banana");
fruits.push("Mango");
console.log(fruits);

type Person = {
  name: string,
  age: number
}

const myDetails: Array<Person> = [];
myDetails.push({ name: "John", age: 25 });
myDetails.push({ name: "Jane", age: 30 });
console.log(myDetails); // Output will be an array of objects

// Generic Function
// You can take whatever you want in place of T and U and it can take multiple parameters for multiple arguments
function merge<T, U>(objA: T, objB: U) {
  return { ...objA, ...objB };
}

const res = merge({ name: "Praveen" }, { role: "Software Engineer" });
console.log(res); // Output will be an object with properties from both objects

//  Generic Constraints
function createObject<T extends string, U extends number, V extends boolean>(
  key: T,
  value: U,
  isActive: V
): { key: T, value: U, isActive: V } {
  return { key, value, isActive }
}

const obj = createObject("age", 25, true);
console.log(obj);

// Generic with interface
interface Box<T> {
  value: T
}

const numberBox: Box<number> = { value: 200 };
const stringBox: Box<string> = { value: "Hello" };
console.log(numberBox);
console.log(stringBox);

// Generic Default

interface User<T = string> {
  data: T,
  status: number
}

const response: User = { data: "Success", status: 200 } // Default to String
const jsonRes: User<object> = { data: { name: "Praveen" }, status: 200 }
console.log(response);
console.log(jsonRes);
// We can define our type and passed it to the "User" interface

// Genereic with class

class Container<T> {
  private content: T
  constructor(content: T) {
    this.content = content
  }
  getContent(): T {
    return this.content
  }
}

const stringContainer = new Container<string>("Hello");
const numberContainer = new Container<number>(100);
console.log(stringContainer.getContent());
console.log(numberContainer.getContent());

// Generic with Array

function getFirst<T>(arr: T[]): T {
  return arr[0]
}

const firstNumner = getFirst([1, 2, 3, 4, 5])
const firstString = getFirst(["a", "b", "c"])
console.log(firstNumner);
console.log(firstString );

// Generic with keyof

// function getProperty(obj:object, key:string){
//   return obj[key]
// }

// const res1 = getProperty({}, "name")
// console.log(res1); // Output will be undefined
// The above code will not work because the key is not defined in the object

// The correct code is below

function getProprty<T extends object, K extends keyof T>(obj: T, key: K) : T[K] {
  return obj[key]
}

const resultName = getProprty({ name: "Praveen", age: 25 }, "name")
const resultAge = getProprty({ name: "Praveen", age: 25 }, "age")
console.log(resultName); // Output will be "Praveen"
console.log(resultAge); // Output will be 25