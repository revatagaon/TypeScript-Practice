"use strict";
// The difference between a class and an interace is that an interface does not have an initializer for its properties
let user;
user = {
    name: "Praveen",
    age: 32,
    greet(text) {
        console.log("Hi there, I am" + " " + this.name + " " + text);
    }
};
user.greet("Revatagaon");
// Using the imaplement key you can add multiple interfaces to a class by comma separating them
class Person {
    constructor(name) {
        this.name = name;
    }
    greet(text) {
        console.log("Hi there, I am" + " " + this.name + " " + text);
    }
}
const p1 = new Person("Sangu");
p1.greet("Ballolli");
class ReadOnlyExample {
    constructor(name) {
        this.name = name;
    }
    greet(text) {
        console.log("Hi there, I am" + " " + this.name + " " + text);
    }
}
let user1;
user1 = new ReadOnlyExample("Praveen");
class Person1 {
    constructor(name) {
        this.name = name;
    }
    greet(text) {
        console.log("Hi there, It is Extending Interface" + " " + this.name + " " + text);
    }
}
let user2;
user2 = new Person1("Praveen");
user2.greet("Revatagaon");
let addNumber;
addNumber = (a, b) => {
    return a + b;
};
console.log(addNumber(10, 20));
class MyName {
    constructor(name) {
        this.name = name;
    }
}
