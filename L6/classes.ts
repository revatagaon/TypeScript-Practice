class Department {
  name: string;
  constructor(n: string) {
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
}
accountingCopy.describeCopy();
// Output: Department: Dummy Department

// Private, Public access modifiers
class Department1 {
  public name: string; // If you do not add public, then it is by default public
  private employee: string[]; // If you do not add private, then it can be modified outside the class which is not a good practice
  private readonly id1: string; // It can be initialized only once
  constructor(n: string) {
    this.name = n;
    this.employee = [];
    this.id1 = "D123";
  }
  describe() {
    // this.id1 = "D456"; // This will give an error because id1 is readonly
    console.log(`Department: ${this.name}`);
  }
  addEmployee(employee: string) {
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
  constructor(private readonly id: string, public name: string) {
  }
  describe() {
    console.log(`Department: ${this.name}`);
  }
}
const accountingCopy2 = new Department2("D1", "Accounting");

// Inheritance, Override Properties and Protected Modifiers
// Getter and Setter
class Department3 {
  public name: string;
  // private employee: string[];
  protected employee: string[];
  private readonly id1: string;
  constructor(n: string, id: string) {
    this.name = n;
    this.employee = [];
    this.id1 = id;
  }
  describe() {
    console.log(`Department: ${this.name}`);
  }
  addEmployee(employee: string) {
    this.employee.push(employee);
  }
  getEmployeeInfo() {
    console.log("The Number of Employees are in Department3: " + this.employee.length);
    console.log("The Employees are in Department3: " + this.employee);
  }
}

class inheritedAccount extends Department3 {
  constructor(id: string, private report: string[]) {
    super(id, "Inherited Accounting")
  }

  addReport(text: string) {
    this.report.push(text);
  }

  printReports() {
    console.log("The Reports are: " + this.report);
  }

  // Overriding the addEmployee method from parent class
  addEmployee(employee: string): void {
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

  set setReports(value: string) {
    if (!value) {
      throw new Error("Invalid value");
    }
    this.report.push(value);
  }
}

const accDep = new inheritedAccount("D1", []);
accDep.addReport("Report-1")
accDep.addReport("Report-2")
accDep.addReport("Report-3")
accDep.printReports();

accDep.addEmployee("Praveen")
accDep.getEmployeeInfo();

// Setter and Getter method usage or calling them
accDep.setReports = "Report from Setter ";
console.log("getter", accDep.getReports);

// Static Method
class Department4 {
  public name: string;
  protected employee: string[];
  private readonly id: string;
  constructor(id: string, n: string) {
    this.name = n;
    this.id = id;
    this.employee = [];
  }
  static getSalary() {
    return { salary: 50000 }
  }
}
const mySalary = Department4.getSalary();
console.log(mySalary.salary); // Output: 50000
// The static method can be called without creating an instance of the class

// Abstract Classes
abstract class Department5 {
  name: string;
  protected employee: string[];
  protected readonly id: string;
  constructor(id: string, n: string) {
    this.name = n;
    this.id = id;
    this.employee = [];
  }

  abstract describe(this: Department5): void;
  abstract displayName(): void;
}

class Subclass extends Department5 {
  constructor(id: string, private reports: string[]) {
    super(id, "Praveen Accounting");
  }
  describe(): void {
    console.log("Dummy Department 5", this.id)
  }
  displayName(): void {
    console.log(this.name)
  }
}

const subClass = new Subclass("D1", []);
subClass.describe();