// // SCOPE, Global

// var a = 1;
// let b = 2;
// const c = 3;

// // function test() {
// //     var a = 4;
// //     let b = 5;
// //     const c = 6;  
// //     console.log('Function Scope: ', a, b, c);
// // }
// // test();

// // Block level scope: Anything wrapped in curly braces

// // if(true){
// //     var a = 4;
// //     let b = 5;
// //     const c = 6;
// //     console.log('If Scope: ', a, b, c);
// // }

// // for(var a = 0; a < 10; a++){
// //     console.log(`Loop: ${a}`);
// // }

// console.log('Global Scope: ', a, b, c);

// // Examine the Document Object

// let val; 

// val = document;
// val = document.all;
// val = document.all[2];
// val = document.all.length;
// val = document.head;
// val = document.body;
// val = document.doctype;
// val = document.domain;
// val = document.URL;
// val = document.characterSet;
// val = document.contentType;

// val = document.forms;
// val = document.forms[0];
// val = document.forms[0].id;
// val = document.forms[0].method;
// val = document.forms[0].action;

// val = document.links;
// val = document.links[0];
// val = document.links[0].className;
// val = document.links[0].classList[0];

// val = document.images; 

// val = document.scripts;
// val = document.scripts[2].getAttribute('src');

// // Using a forEach on a collection

// let scriptsArr = Array.from(scripts);

// scriptsArr.forEach(function(script) {
//     consolelog(script);
// })


// console.log(val);


// // document.getElementById()

// console.log(document.getElementById(' ').id);
// console.log(document.getElementById(' ').className);

// // Change Styling

// document.getElementById('task-title').style.background = '#444';
// document.getElementById('task-title').style.color = '#444';
// document.getElementById('task-title').style.padding = '5px';

// // Change Content
// document.getElementById('task-title').textContent = 'Task List';
// document.getElementById('task-title').innerText = 'My Tasks';
// document.getElementById('task-title').innerHTML = '<span style="color:red"> Task List </span>';

// // Shorten ^

// const taskTitle = document.getElementById('task-title');


// // document.querySelector()

// console.log(document.querySelector('#task-title'));
// console.log(document.querySelector('.card-title'));
// console.log(document.querySelector('h5'));

// document.querySelector('li').style.color = 'red';
// document.querySelector('li:last-child').style.color = 'red';
// document.querySelector('li:nth-child(3)').style.color = 'yellow';
// document.querySelector('li:nth-child(4)').textContent = 'Hello World';
// document.querySelector('li:nth-child(odd)').style.background = 'Hello World';

//document.getElementsByClassName

// const items = document.getElementsByClassName('collection-item');
// console.log(items);

// items[0].style.color = 'red';
// items[3].textContent = 'Hello';

// const listItems = document.querySelector('ul').getElementsByClassName('collection-item');

// console.log(listItems);

// document.getElementsByTagName

// let lis = document.getElementsByTagName('li');
// console.log(lis);

// lis[0].style.color = 'red';
// list[3].textContent = 'Hello';

// // Convert HTML Collection into Array

// lis = Array.from(lis);

// lis.reverse();
// lis.forEach(function(li, index) {
//     console.log(li)
//     li.textContent = `${index}: Hello`;
// })

// console.log(lis);

// document.querySelectorAll HTML COLLECTION VS. NODELIST

// const items = document.querySelectorAll('ul.collection li.collection-item');

// items.forEach(function(item, index) {
//     item.textContent = `${index}: Hello`;
// });

// const liOdd = document.querySelectorAll('li:nth-child(odd)');
// const liEven = document.querySelectorAll('li:nth-child(even)');

// liOdd.forEach(function(li, index) {
//     li.style.background = '#ccc';
// });

// for(let i = 0; i < liEven.length; i++){
//     liEven[i].style.background = '#f4f4f4';
// }
// console.log(items);

// Traverse the dom, move up and down

// let val;

// const list = document.querySelector('ul.collection');
// const listItem = document.querySelector('li.collection-item:first-child');

// val = listItem;
// val = list;

// // Get child nodes

// val = list.childNodes;
// val = list.childNodes[0];
// val = list.childNodes[0].nodeName;
// val = list.childNodes[1].nodeType;

// // 1 - Element
// // 2 - Attribute (deprecated)
// // 3 - Text node 
// // 8 - comment
// // 9 - Document itself
// // 10 - Doctype


// // Get children element nodes

// val = list.children;
// val = list.children[0];
// list.children[1].textContent = 'Hello';
// //children of children
// list.children[3].cheldren[0].id = 'test-link';
// val = list.children[3].children[0];
// //first child
// val = list.firstChild;
// val = list.firstElementChild; 
// //last child
// val = list.lastChild;
// val = list.lastElementChild;

// // Count child elements
// val = list.childElementCount;

// // Get parent node
// val = listItem.parentNode;
// val = listItem.parentElement;
// val = listItem.parentElement.parentElement;

// // Get next sibling
// val = listItem.nextSibling;
// val = listItem.nextElementSibling;

// // Get prev sibling
// val = listItem.previousSibling;
// val = listItem.previousElementSibling;

// console.log(val)

//Create element

// const li = document.createElement('li');

// // Add class

// li.className = 'collection-item';

// // Add id
// li.id = 'new-item';

// // Add attribute
// li.setAttribute('title', 'New Item');

// // Create text node and append
// li.appendChild(document.createTextNode('Hello World'));

// // Append li as child to ul

// // document.querySelector('ul.collection').appendChild('li')

// // Create new link element
// const link = document.createElement('a');
// link.className = 'delete-item secondary-content';
// link.innerHTML = '<i class = "fa fa-remove"></i>';
// li.appendChild(link);

// document.querySelector('ul.collection').appendChild(li);

// console.log(li);

// Replace Element

// Create Element
// const newHeading = document.createElement('h2');
// // Add id
// newHeading.id = 'task-title';
// // New text node
// newHeading.appendChild(document.createTextNode('Task List'));

// // Get the old heading
// const oldHeading = document.getElementById('task-title');
// //Parent
// const cardAction = document.querySelector('.card-action');

// // Replace
// cardAction.replaceChild(newHeading, oldHeading);

// // Remove Element
// const lis = document.querySelectorAll('li');
// const list = document.querySelector('ul');

// // Remove list item
// lis[0].remove();

// // Remove Child element
// list.removeChild(lis[3]); 

// // Classes & Attr
// const firstLi = document.querySelector('li:first-child');
// const link = firstLi.children[0];

// let val;

// val = link.className;
// val = link.classList;  

// console.log(val);

// Event Listeners & The Event Object

// document.querySelector('.clear-tasks').addEventListener('click',
// function(e) {
//     console.log('Hello World');
//     e.preventDefault();
//     // Will prevent from the default event on a particular element (can also put # on href)
// });

//OR Named Function

// document.querySelector('.clear-tasks').addEventListener('click', onclick);

// function onclick(e) {
//     // console.log('Clicked');

//     let val;

//     val = e;

//     // Event target element

//     val = e.target;
//     val = e.target.id;
//     val = e.target.className;
//     val = e.target.classList;

//     e.target.innerText = 'Hello';

//     //Event Type
//     val = e.type;

//     //Timestamp
//     val = e.timeStamp;

//     //Coords event relative to the window
//     val = e.clientY;
//     val = e.clientX;

//     // Coords event relative to the element
//     val = e.offsetY;
//     val = e.offsetX;

//     console.log(val);
// }

// Mouse Events:

// const clearBtn = document.querySelector('.clear-tasks');
// const card = document.querySelector('.card');
// const heading = document.querySelector('h5');

// // Click
// // clearBtn.addEventListener('click', runEvent);
// // Doubleclick
// // clearBtn.addEventListener('dblclick', runEvent);
// // Mousedown
// // clearBtn.addEventListener('mousedown', runEvent);
// //Mouseup
// // clearBtn.addEventListener('mouseup', runEvent);
// //Mouseenter
// // card.addEventListener('mouseenter', runEvent);
// //Mouseleave
// // card.addEventListener('mouseleave', runEvent);
// //Mouseover
// // card.addEventListener('mouseover', runEvent);
// //Mouseout
// // card.addEventListener('mouseout', runEvent);
// //Mousemove
// card.addEventListener('mousemove', runEvent); //For tracking mouse coordinates perhaps


// //Event Handler:

// function runEvent(e) {
//     console.log(`EVENT TYPE: ${e.type}`);

//     heading.textContent = `MouseX: ${e.offsetX} MouseY: ${e.offsetY}`;

//     document.body.style.bakgroundColor = `rgb(${e.offsetX}, ${e.offsetY}, 40)`;
// }


//Keyboard & Input Events

const form = document.querySelector('form');

const taskInput = document.getElementById('task');

const heading = document.querySelector('h5');

const select = document.querySelector('select');

// Clear input
taskInput.value = '';

// form.addEventListener('submit', runEvent);

// Keydown
// taskInput.addEventListener('keydown', runEvent);

// Keyup
// taskInput.addEventListener('keyup', runEvent);

// Keypress
// taskInput.addEventListener('keypress', runEvent);

// Focus
// taskInput.addEventListener('focus', runEvent);

// Blur
// taskInput.addEventListener('blur', runEvent);

// Cut
// taskInput.addEventListener('cut', runEvent);

// Paste
// taskInput.addEventListener('paste', runEvent);

//Input
// taskInput.addEventListener('input', runEvent);

// Change
// select.addEventListener('change', runEvent);

// console.log(e.target.value);

// heading.innerText = e.target.value;

// function runEvent() {
    // console.log(`EVENT TYPE: ${e.type}`);
    //Get input value
    // console.log(taskInput.value);

    // e.preventDefault();
//}

// EVENT BUBBLING
// Targeting the correct element using event delegation

// document.querySelector('.card-title').addEventListener('click', 
// function() {
//     console.log('card title'); // bubbles up, calling the following tasks >>>>
// });

// document.querySelector('.card-content').addEventListener('click', 
// function() {
//     console.log('card content');
// });

// document.querySelector('.card').addEventListener('click', 
// function() {
//     console.log('card');
// });

// document.querySelector('.col').addEventListener('click', 
// function() {
//     console.log('col');
// });

// Proper Delegation

// const delItem = document.querySelector('.delete-item');

// delItem.addEventListener('click', deleteItem);

// function deleteItem() {
//     console.log('Delete Item');
// }

// document.body.addEventListener('click', deleteItem);

// function deleteItem(e) {
//     if(e.target.parentElement.classList.contains('delete-item')) {
//         console.log('delete item');
//         e.target.parentElement.parentElement.remove();
//     } //Working, best practice. Targeting a specific element. 
// }

// LOCAL & SESSION STORAGE API

// Set local storage item 

// localStorage.setItem('name', 'John'); //Local Storage Item(s)
// localStorage.setItem('age', '30');
// localStorage.setItem('gender', 'Male');

// remove from storage

// localStorage.removeItem('name');

// get from storage

// const name = localStorage.getItem('name');
// const name = localStorage.getItem('age');
// const name = localStorage.getItem('gender');

// localStorage.clear();

// console.log(name, age, gender);


// sessionStorage.setItem('name', 'Beth'); //Session Storage Item.. Will not stay once the browser has been closed. 

// document.querySelector('form').addEventListener('submit', 
// function(e) {

//     const task = document.getElementById('task').value;

//     let tasks;
//     if(localStorage.getItem('tasks') === null) {
//         tasks = [];
//     } else {
//         tasks = JSON.parse(localStorage.getItem('tasks'));
//     }

//     tasks.push(task);

//     localStorage.setItem('task', JSON.stringify(task));

//     alert('Task saved');

//     e.preventDefault();
// })

// const tasks = JSON.parse(localStorage.getItem('tasks'));

// tasks.forEach(function(task) {
//     console.log(task);
// })



