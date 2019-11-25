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


