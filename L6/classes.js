"use strict";
class Department {
    constructor(n) {
        this.name = n;
    }
    describe() {
        console.log(`Department: ${this.name}`);
    }
}
const accounting = new Department("Accounting");
accounting.describe();
// Output: Department: Accounting
// copying the class
const accountingCopy = {
    name: "Dummy Department",
    describeCopy() {
        console.log(`Department: ${this.name}`);
    }
};
accountingCopy.describeCopy();
// Output: Department: Dummy Department
// Private, Public access modifiers
class Department1 {
    constructor(n) {
        this.name = n;
        this.employee = [];
        this.id1 = "D123";
    }
    describe() {
        // this.id1 = "D456"; // This will give an error because id1 is readonly
        console.log(`Department: ${this.name}`);
    }
    addEmployee(employee) {
        this.employee.push(employee);
    }
    getEmployeeInfo() {
        console.log("The Number of Employees are: " + this.employee.length);
        console.log("The Employees are: " + this.employee);
    }
}
const accountingCopy1 = new Department1("Accounting");
accountingCopy1.addEmployee("John");
accountingCopy1.addEmployee("Doe");
accountingCopy1.getEmployeeInfo();
// Output: The Number of Employees are: 2
// Output: The Employees are: John,Doe
// Following is the constructor shorthand Code
class Department2 {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    describe() {
        console.log(`Department: ${this.name}`);
    }
}
const accountingCopy2 = new Department2("D1", "Accounting");
// Inheritance, Override Properties and Protected Modifiers
// Getter and Setter
class Department3 {
    constructor(n, id) {
        this.name = n;
        this.employee = [];
        this.id1 = id;
    }
    describe() {
        console.log(`Department: ${this.name}`);
    }
    addEmployee(employee) {
        this.employee.push(employee);
    }
    getEmployeeInfo() {
        console.log("The Number of Employees are in Department3: " + this.employee.length);
        console.log("The Employees are in Department3: " + this.employee);
    }
}
class inheritedAccount extends Department3 {
    constructor(id, report) {
        super(id, "Inherited Accounting");
        this.report = report;
    }
    addReport(text) {
        this.report.push(text);
    }
    printReports() {
        console.log("The Reports are: " + this.report);
    }
    // Overriding the addEmployee method from parent class
    addEmployee(employee) {
        if (employee === "Praveen") {
            return;
        }
        this.employee.push(employee);
        // as of now this will give error because employee is private in parent class Line no 
        // Now I will make it protected in parent class
        // and then I will be able to access it in child class
    }
    get getReports() {
        if (this.report.length > 0) {
            return this.report;
        }
        throw new Error("No reports found");
    }
    set setReports(value) {
        if (!value) {
            throw new Error("Invalid value");
        }
        this.report.push(value);
    }
}
const accDep = new inheritedAccount("D1", []);
accDep.addReport("Report-1");
accDep.addReport("Report-2");
accDep.addReport("Report-3");
accDep.printReports();
accDep.addEmployee("Praveen");
accDep.getEmployeeInfo();
// Setter and Getter method usage or calling them
accDep.setReports = "Report from Setter ";
console.log("getter", accDep.getReports);
// Static Method
class Department4 {
    constructor(id, n) {
        this.name = n;
        this.id = id;
        this.employee = [];
    }
    static getSalary() {
        return { salary: 50000 };
    }
}
const mySalary = Department4.getSalary();
console.log(mySalary.salary); // Output: 50000
// The static method can be called without creating an instance of the class
// Abstract Classes
class Department5 {
    constructor(id, n) {
        this.name = n;
        this.id = id;
        this.employee = [];
    }
}
class Subclass extends Department5 {
    constructor(id, reports) {
        super(id, "Praveen Accounting");
        this.reports = reports;
    }
    describe() {
        console.log("Dummy Department 5", this.id);
    }
    displayName() {
        console.log(this.name);
    }
}
const subClass = new Subclass("D1", []);
subClass.describe();
