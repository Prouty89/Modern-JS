// Log to console

// console.log('Hello Beautiful');
// console.log(123)
// console.log(true)

// var greeting = 'Hello';
// console.log(greeting);
// console.log([1,2,3,4]);
// console.log({a:1, b:2});
// console.table({a:1, b:2});

// console.error('This is some error');

// console.clear();
// console.warn('Warning');
// console.time('Hello');
// console.log('Hello Beautiful');
// console.log('Hello Beautiful');
// console.log('Hello Beautiful');
// console.log('Hello Beautiful');
// console.timeEnd('Hello');



// var, let, const

// var name = 'John Doe'; 

// console.log(name);

// name = 'Steve Bar';

// console.log(name);

// // Initialize a var

// var greeting;
// console.log(greeting); // undefined
// greeting= 'Hello';
// console.log(greeting); // Hello

// // Variables only allow for letters, numbers, _, $
// // Variables cannot start with a number

// // Multi word vars 
// var firstName = 'John'; // Camel case
// var first_name = 'Sara'; //Snake case
// var FirstName = 'Tom'; // Pascal case
// var firstname; // not recommended


// LET
// let name;
// name = 'John Doe'; 
// console.log(name);
// name = 'Steve Bar';
// console.log(name);

//CONST

// const name = 'John';
// console.log(name);
// Can not reassign
// name = 'Sara';  Assignment to a constant variable

// Have to assign a value
//const greeting; Missing initializer in const declaration

// const person = {
//     name: 'John',
//     age: 30
// }

//You CAN reassign the values within an object.

// person.name = 'Sara';
// person.age = 32;

// console.log(person);

// const numbers = [1,22,3,4,5];
// numbers.push(6);
//const numbers = [1,22,3,4,5,6]; XXXXXXXX

// console.log(numbers);


// Primitive Types

// String
// const name = 'John Doe';
// Number
// const age  = 45
// Boolean
// const hasKids = true;
// Null
// const car = null;
// Undefined
// let test;
//Symbol 
// const sym = Symbol();


//Reference Types
//Array
// const hobbies = ['movies', 'music']; 
//Object Literal
// const address = {
//     city: 'Boston',
//     state: 'MA'
// }

// const today = new Date();

// console.log(today);
// console.log(typeof today);
// console.log(typeof sym);

// DATA CONVERSION

let val; 

// Number to string 

val = String(5); 
val = String(4 + 4);

// Bool to string 

val = String(true);

// Date to string
val = String(new Date());

// Array to string
val = String([1,2,3,4,])

// toString()
val = (5).toString();
val = (true).toString();

// String to Number

val = Number('5');

val = Number(true);

val = Number(false);

val = Number(null);

val = Number('hello');

val = Number([1,2,3]);

// ParseInt

val = parseInt('100');
val = parseFloat('100.30')

// Output 

console.log(val);

console.log(typeof val);

console.log(val.toFixed());

// console.log(val.length);


//Type Coersion

const val1 = 5; 
const val2 = 6; 
const sum = val1 + val2;






