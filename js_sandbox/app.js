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

// let val; 

// // Number to string 

// val = String(5); 
// val = String(4 + 4);

// // Bool to string 

// val = String(true);

// // Date to string
// val = String(new Date());

// Array to string
// val = String([1,2,3,4,])

// toString()
// val = (5).toString();
// val = (true).toString();

// String to Number

// val = Number('5');

// val = Number(true);

// val = Number(false);

// val = Number(null);

// val = Number('hello');

// val = Number([1,2,3]);

// ParseInt

// val = parseInt('100');
// val = parseFloat('100.30')

// Output 

// console.log(val);

// console.log(typeof val);

// console.log(val.toFixed(2));

// console.log(val.length);


//Type Coersion

// const val1 = String(5); 
// const val2 = 6; 
// const sum = Number(val1 + val2);

// console.log(sum);
// console.log(typeof sum)

// Math Operator


// const num1 = 100;
// const num2 = 50;

// let val;

//simple math with numbers 

// val = num1 + num2;
// val = num1 * num2;
// val = num1 - num2;
// val = num1 / num2;
// val = num1 % num2;

// // Math Object

// val = Math.PI; 
// val = Math.E;
// val = Math.round(1.8);
// val = Math.ceil(2.4);
// val = Math.floor(2.8);
// val = Math.sqrt(64);
// val = Math.abs(-2);
// val = Math.pow(7, 3);
// val = Math.min(2, 33, 4, 6, 8, 34);
// val = Math.max(3, 7, 19, 55, 6);

// val = Math.random();

// val = Math.floor(Math.random() * 20 +1);



// console.log(val)


// Strings and Concatenation

// const firstName = 'William';
// const lastName = 'Johnson';
// const age = 36;
// const str = 'Hello my name is Blake'
// const tags = 'Purple, Diamond, Skew'

// let val; 


// //Concatenation
// val = firstName + ' ' + lastName;

// //Append
// val = 'Brad ';
// val += 'Traversy';

// val = 'Hello, my name is ' + firstName + ' and I am ' + age;

// //Escaping 

// val = "That\'s awesome, I can\'t wait";

// //Length 
// val = firstName.length;

// // Concat
// val = firstName.concat(' ', lastName);

// // Change case
// val = firstName.toLocaleUpperCase();
// val = firstName.toLocaleLowerCase();

// val = firstName[0];

// // indexOf()
// val = firstName.indexOf('l');
// val = firstName.lastIndexOf('l');

// //charAt()

// val = firstName.charAt('2');

// // Get last char
// val = firstName.charAt(firstName.length -1);

// // substring()

// val = firstName.substring(0, 4);

// //slice()

// val = firstName.slice(0,4);
// val = firstName.slice(-3);

// //split()

// val = str.split(' ');
// val = tags.split(',');

// //replace()

// val = str.replace('Brad', 'Jack');

// //includes()

// val = str.includes('Hello');


// console.log(val);

//Template literals

// const name = 'John';
// const age = 30; 
// const job = 'Web Developer';
// const city = 'Miami';
// let html; 

// // Without Template Strings (es5)

// html = '<ul><li>Name: ' + name + '</li><li>Age: ' + age + '</li><li> ' + job+ ' </li> <li>City: ' + city + '</li></ul>';

// html = '<ul>' + 
//         '<li>Age: ' + age + '</li>' +
//         '<li>Name: ' + name + '</li>' +
//         '<li>City: ' + city + '</li>' +
//         '<li>Job: ' + job + '</li>' +
//         '</ul>';

//         function hello() {
//             return 'hello';
//         }

        
//         // With template literals (es6)
        
//         html = `
//         <ul>
//         <li> Name: ${name} </li>
//         <li> Age: ${age} </li>
//         <li> City: ${city} </li>
//         <li> Job: ${job} </li>
//         <li> ${2 + 2} </li>
//         <li> ${hello()}</li>
//         <li> ${age > 29 ? 'Over 30' : 'Under 30'}</li>
//         <li> ${age}</li>
//         </ul>
//         `
//     document.body.innerHTML = html;


// Arrays

// Create some arrays 

// const numbers = [1, 3 , 45, 88, 4, 90];

// const numbers2 = new Array(2,3,4,5,6,66,11,90);

// const fruit = ['Apple', 'Banana', 'Orange', 'Pear']

// const mixed = [22 , 'Hello', true, undefined, {a:1, b: 1}, new Date()];

// let val;

// // Array Length
// val = numbers.length;
// //Check if is array
// val = Array.isArray(numbers);
// //Get single value
// val = numbers[3];
// val = numbers[0]; 
// //Insert into array
// numbers[2] = 100;
// // Find index of value 
// val = numbers.indexOf(88);

//Array Mutation
// Add to end
// numbers.push(250);
// // Add to front
// numbers.unshift(120);
// // Take off from end
// numbers.pop();
// // Take off from front
// numbers.shift();
// // Splice values
// numbers.splice(1,2);
// // Reverse
// numbers.reverse();
//Concatenate array
// val = numbers.concat(numbers2);
// //sortying array
// val = fruit.sort();
// val = numbers.sort();

// // Use the compare function 
// val = numbers.sort(function(x,y){
//     return x-y;
// });

// //reverse sort

// val = numbers.sort(function(x,y){
//     return y -x; 
// });

// //find

// function under50(num){
//     return num <50;
// }

// val = numbers.find(under50);


// console.log(val);
// console.log(numbers);

// Object literals

// const person = {
//     firstName: 'Steve',
//     lastName: 'Smith',
//     age: 30,
//     email: 'steve@aol.com',
//     hobbies: ['music', 'sports'],
//     married: false,
//     address: {
//         city: 'Miami',
//         state: 'Florida'
//     },
//     getBirthYear: function(){
//         return 2017 - this.age;
//     }
// }

// let val;

// val = person; 
// // Get specific value

// val = person.firstName;
// val = person['lastName'];
// val = person.age;
// val = person.hobbies[1];
// val = person.address.state;
// val = person.address['city'];
// val = person.getBirthYear();

// console.log(val);


// const people = [
//     {name: 'John', age: 30},
//     {name: 'Mike', age: 40},
//     {name: 'Bill', age: 27},
// ];

// //LOOP
// for(let i = 0; i < people.length; i++){
//     console.log(people[i].name)
// }


// let val; 

// const today = new Date();
// let birthday = new Date('08-21-1989 11:25:00');
// birthday = new Date('September 22 1988');
// birthday = new Date('9/10/1977')

// val = today.getMonth(); 
// val = today.getDate();
// val = today.getDay();
// val = today.getFullYear();
// val = today.getHours();
// val = today.getMinutes();
// val = today.getSeconds();
// val = today.getTime();

// birthday.setMonth(2);
// birthday.setDate(12);
// birthday.setHours(3);
// birthday.setFullYear(1984);

// console.log(birthday);



