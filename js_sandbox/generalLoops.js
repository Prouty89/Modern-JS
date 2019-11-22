// Loops and Iteration
// Run the same block of code using different values each time
// For loops and While loops

// Array forEach and map, forIn

//For

// for(let i = 0; i <= 10; i++){
//     // console.log('Number ' + i);
//     if(i === 2) {
//         console.log('2 is my favorite Number');
//         continue;
//     }

//     if (i === 5){
//         console.log('Stop the loop');
//         break;
//     }
//     console.log('Number' + i);
// }

//While Loop

// let i = 0; 

// while (i < 10){
//     console.log('Number ' + i);
//     i++;
// }

//Do While

// let i = 0; 

// do {
//     console.log('Number ' + i);
//     i++;
// }

// while(i < 10);

const cars = ['Jeep', 'Chevy', 'Honda', 'Toyota']
// FOR
// for (let i = 0; i< cars.length; i++){
//     console.log(cars[i])
// }
// vs.
// FOREACH
cars.forEach(function(car, index, array){
    console.log(`${index} : ${car}`);
    console.log(array)
})
//MAP

// const users = [
//     {id: 1, name: 'John'},
//     {id: 2, name: 'Sara'},
//     {id: 3, name: 'Karen'},
//     {id: 4, name: 'Joe'}
// ];

// const ids = users.map(function(user){
//     return user.id;
// });

// console.log(ids);

// FOR IN loop
const user = {
    firstName: 'John',
    lastName: 'Doe',
    age: 40
}
// looping through object and getting key value pair
for(let x in user){
    console.log(`${x} : ${user[x]}`);
}