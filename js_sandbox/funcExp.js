// Blocks of code that can be defined and called at a later point in time, or right away
// Declarations and expressions, IFFE

function greet(firstName = "Bill", lastName = ""){
    //function scope
    // console.log('Hello');
    return 'Hello ' + firstName + ' ' + lastName
}

// console.log(greet());

// Function Expressions 

// const square = function (x = 8) {
//     return x * x;
// }

// console.log(square());

// Immediately invokable function expressions - IFFE

// (function(){
//     console.log('IFFE Ran..')
// })();

// (function(name){
//     console.log('Fish tacos..' + name)
// })('Blake');

// Property Methods
// function inside an object

const todo = {
    add: function () {
        console.log('added todo');
    },
    edit: function(id) {
        console.log(`Edit todo ${id}`);
    }
}

todo.delete = function() {
    console.log('Delete todo..')
}

todo.edit(22);
todo.add();
todo.delete();