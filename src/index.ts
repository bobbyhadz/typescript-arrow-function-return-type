export {};

// // EXAMPLE 1 - Set the return type of an arrow function in TypeScript

// 👇️ with arrow function
const greet = (name: string): string => {
  return `Hello ${name}`;
};

console.log(greet('Bobby Hadz')); // 👉️ "Hello Bobby Hadz"

// ---------------------------------------------------

// // EXAMPLE 2 - Set return type of an arrow function in a class

// class Employee {
//   constructor(public name: string) {
//     this.name = name;
//   }

//   // 👇️ with class method
//   greet = (): string => {
//     return `Hello ${this.name}`;
//   };
// }

// const employee = new Employee('Bobby Hadz');
// console.log(employee.greet()); // 👉️ "Hello Bobby Hadz"

// ---------------------------------------------------

// // EXAMPLE 3 - TypeScript can sometimes infer the return type

// // 👇️ const greet: (name: string) => string
// const greet = (name: string) => {
//   return `Hello ${name}`;
// };

// console.log(greet('Bobby Hadz'));

// ---------------------------------------------------

// // EXAMPLE 4 - Using a type alias or an interface

// type Person = {
//   name: string;
//   salary: number;
//   department: string;
// };

// const getEmployee = (): Person => {
//   return {
//     name: 'Bobby Hadz',
//     salary: 100,
//     department: 'development',
//   };
// };

// console.log(getEmployee());

// ---------------------------------------------------

// // EXAMPLE 5 - Using an implicit arrow function return

// type Person = {
//   name: string;
//   salary: number;
//   department: string;
// };

// // 👇️ implicit arrow function return
// const getEmployee = (): Person => ({
//   name: 'Bobby Hadz',
//   salary: 100,
//   department: 'development',
// });

// console.log(getEmployee());

// ---------------------------------------------------

// // EXAMPLE 6 - Arrow function returning one of multiple types

// function getStringOrNumber(): string | number {
//   if (Math.random() > 0.5) {
//     return 100;
//   }

//   return 'bobbyhadz.com';
// }
// console.log(getStringOrNumber());

// ---------------------------------------------------

// // EXAMPLE 7 - Setting the return type of an arrow function in a class

// class Employee {
//   constructor(public name: string) {
//     this.name = name;
//   }

//   // 👇️ string return type
//   greet = (): string => {
//     return `Hello ${this.name}`;
//   };
// }

// const employee = new Employee('Bobby Hadz');
// console.log(employee.greet()); // 👉️ "Hello Bobby Hadz"
