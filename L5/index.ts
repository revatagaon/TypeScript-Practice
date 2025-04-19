let userInput: unknown;
// let userInput: any;
let userName: string;

userInput = 10;
userName = "Praveen";

// userName = userInput; // Error: Type 'unknown' is not assignable to type 'string'.
// The Error we are getting is because we are trying to assign a value of type unknown to a variable of type string.
// If you use data type any then it will not give any error. because any will definitely have a datatype where as the unknown is having doubt on what data type it is.

// Never return type in a Function
function generateError(message: string, code: number): never {
  throw { message: message, errorCode: code };
}

const res = generateError("Internal Server Error", 500);
console.log(res);

// This function will never return a value. It will always throw an error.
// So the return type of this function is never.
// This is useful when you want to indicate that a function will never return a value.
// For example, if you have a function that always throws an error, you can use the never type to indicate that it will never return a value.