// document.getElementById()

console.log(document.getElementById(' ').id);
console.log(document.getElementById(' ').className);

// Change Styling

document.getElementById('task-title').style.background = '#444';
document.getElementById('task-title').style.color = '#444';
document.getElementById('task-title').style.padding = '5px';

// Change Content
document.getElementById('task-title').textContent = 'Task List';
document.getElementById('task-title').innerText = 'My Tasks';
document.getElementById('task-title').innerHTML = '<span style="color:red"> Task List </span>';

// Shorten ^

const taskTitle = document.getElementById('task-title');


// document.querySelector()

console.log(document.querySelector('#task-title'));
console.log(document.querySelector('.card-title'));
console.log(document.querySelector('h5'));

document.querySelector('li').style.color = 'red';
document.querySelector('li:last-child').style.color = 'red';
document.querySelector('li:nth-child(3)').style.color = 'yellow';
document.querySelector('li:nth-child(4)').textContent = 'Hello World';
document.querySelector('li:nth-child(odd)').style.background = 'Hello World';

