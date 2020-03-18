// Constructors and the 'this' Keyword


// const blake = {
//     name: 'Blake',
//     age: 30
// }

// Dealing with multiple instances 

// Constructor function

// function Person(name, dob) {
//     this.name = name;
//     // this.age = age;
//     this.birthday = new Date(dob);
//     this.calculateAge = function() {
//         const diff = Date.now() - this.birthday.getTime();
//         const ageDate = new Date(diff);
//         return Math.abs(ageDate.getUTCFullYear() - 1970);
//     }
//     // console.log(this) works within scope. 
// };

// console.log(this); // Returns window object because in the global scope this refers to the window object.

// this.alert(1);

// This refers to the current instance of the object, in this case it pertains to the name within the functions scope. 

// const blake = new Person('Blake', 30);
// const john = new Person('John', 36);

// console.log(john.age) //36

// console.log(blake);
// console.log(john);

// const brad = new Person ('Brad', '9-10-1981');

// console.log(brad.calculateAge())

// Built in Constructor Functions

// String

// const name1 = 'Blake'; // Sets a primitive value to this variable
// const name2 = new String('Blake');

// console.log(name1);
// console.log(name2);

// // name2.foo = 'bar';

// console.log(typeof name2);

// if(name2 === 'Blake') {
//     console.log('Yes')
// } else {
//     console.log('No')
// }

// Number

// const num1 = 5;
// const num2 = new Number(5);

// console.log(typeof(num2));

// Regular Expressions

// const re1 = /\w+/;

// const re2 = new RegExp('\w+')

// Prototypes

// Objects in JS inherit their properties from their prototype
// Object.prototype - Obj literal method
// Person.prototype - Constructor method


// function Person(firstName, lastName, dob) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.birthday = new Date(dob);
    // this.calculateAge = function() {
    //     const diff = Date.now() - this.birthday.getTime();
    //     const ageDate = new Date(diff);
    //     return Math.abs(ageDate.getUTCFullYear() - 1970);
    // }
// };

// Get full name 
// Person.prototype.getFullName = function() {
//     return `${this.firstName} ${this.lastName}`
// }

// // Gets Married

// Person.prototype.getsMarried = function(newLastName) {
//     this.lastName = newLastName;
// }

// // Calculate Age

// Person.prototype.calculateAge = function() {
//     const diff = Date.now() - this.birthday.getTime();
//     const ageDate = new Date(diff);
//     return Math.abs(ageDate.getUTCFullYear() - 1970);
// }

// const john = new Person('John', 'Doe', '8-21-89')
// const mary = new Person('Mary', 'Johnson', '3-20-89')

// console.log(mary);
// console.log(john);

// console.log(mary.getFullName());

// mary.getsMarried('Smith');

// console.log('New last name:',mary.getFullName())

// Prototypical Inheritance

// function Person(firstName, lastName) {
//     this.firstName = firstName;
//     this.lastName = lastName;

// }

// // Greeting prototype method

// Person.prototype.greeting = function() {
//     return `Hello There ${this.firstName} ${this.lastName}`
// }

// const person1 = new Person('John', 'Doe');

// // console.log(person1.greeting());

// //Create a customer constructor

// function Customer(firstName, lastName, phone, membership) {
//     Person.call(this, firstName, lastName); //Call is a function that allows us to call another function somewhere else(callback?)

//     this.phone = phone;
//     this.membership = membership;
// };

// //Inherit the Person prototype methods

// Customer.prototype = Object.create(Person.prototype);

// // Make customer.prototype return Customer()

// Customer.prototype.constructor = Customer;

// //Create customer 

// const customer1 = new Customer('Tom', 'Smith', '555-555-5555', 'Standard');

// console.log(customer1);

// // Customer greeting
// Customer.prototype.greeting = function() {
//     return `Hello There ${this.firstName} ${this.lastName}, Welcome to our Company`
// }

// console.log(customer1.greeting())

// Using Object.create

// ES5


// const personPrototypes = {
//     greeting: function() {
//         return `Hello there ${this.firstName} ${this.lastName}`
//     },
//     getsMarried: function(newLastName) {
//         this.lastName = newLastName;
//     }
// }

// const mary = Object.create(personPrototypes);

// mary.firstName = 'Mary';
// mary.lastName = 'Johnson';
// mary.age = 30;

// mary.getsMarried('Thompson');

// console.log(mary.greeting());

// const brad = Object.create(personPrototypes, {
//     firstName: { value: 'Brad'},
//     lastName: {value: 'Traversy'},
//     age: {value: 36}
// });

// console.log(brad);

// console.log(brad.greeting());