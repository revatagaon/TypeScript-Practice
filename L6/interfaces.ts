// The difference between a class and an interace is that an interface does not have an initializer for its properties

// Interface basic structure and usage
interface Person {
  name: string;
  age: number;
  greet(text: string): void;
}

let user: Person;

user = {
  name: "Praveen",
  age: 32,
  greet(text): void {
    console.log("Hi there, I am" + " " + this.name + " " + text);
  }
}

user.greet("Revatagaon");

// Interface with Class

interface Greetable {
  name: string;
  greet(text: string): void;
}

// Using the imaplement key you can add multiple interfaces to a class by comma separating them
class Person implements Greetable {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
  greet(text: string): void {
    console.log("Hi there, I am" + " " + this.name + " " + text);
  }
}

const p1 = new Person("Sangu");
p1.greet("Ballolli");

// Read only properties
interface ReadExample {
  readonly name: string;
  greet(text: string): void;
}

class ReadOnlyExample implements ReadExample {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
  greet(text: string): void {
    console.log("Hi there, I am" + " " + this.name + " " + text);
  }
}

let user1: ReadExample;
user1 = new ReadOnlyExample("Praveen");
// user1.name = "XYZ"; // Error: Cannot assign to 'name' because it is a read-only property, check LN-44

// Extending Interface

interface Named {
  readonly name: string;
}

interface Greetable extends Named {
  greet(text: string): void;
}

class Person1 implements Greetable {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
  greet(text: string): void {
    console.log("Hi there, It is Extending Interface" + " " + this.name + " " + text);
  }
}

let user2: Greetable;
user2 = new Person1("Praveen");
user2.greet("Revatagaon");

// Interface in functions

// By Using Type
// type addFunc = (a: number, b: number) => number;
// By Using Interface
interface addFunc {
  (a: number, b: number): number;
}
let addNumber: addFunc;
addNumber = (a: number, b: number): number => {
  return a + b;
}

console.log(addNumber(10, 20));

// Optional Properties of Interface

interface OptionamNamed {
  readonly name: string;
  outPutName?: string; // ? is used to make the property optional
}

class MyName implements OptionamNamed {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
}