// Objects, Arrays, Tuples and Enum
// Objects
var person = {
  firstName: "Praveen",
  age: 32,
  xyz: {
    address: "Ballolli"
  }
};
// console.log(person.lastName)
// When you runs this code, following error will be occured
// index.ts:9:18 - error TS2339: Property 'lastName' does not exist on type '{ firstName: string; age: number; }'.
console.log(person);