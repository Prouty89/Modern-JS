// //What is Ajax

// // Asynchronous JavaScript and XML
// // Set of web technologies
// // Send & Receive data asynchronously
// // Does not interfere with the current page
// // JSON has replaced XML

// // Objectives:
// // Make async requests in the background
// // No page reload/ refresh
// // fetch data
// // Very interactive

// //Play

// document.getElementById('button').addEventListener('click', loadData)

// function loadData() {
//     // Create XHR object
//     const xhr = new XMLHttpRequest();

//     // Open
//     xhr.open('GET', 'data.txt', true);

//     xhr.onload = function(){
//         console.log('READYSATE', xhr.readyState)
//         if(this.status === 200) {
//             console.log(this.responseText);

//             document.getElementById('output').innerHTML = `<h1>${this.responseText}</h1>`
//         }
//     }

//     xhr.onerror = function() {
//         console.log('Request error...')
//     }

//     xhr.send();

//     // readyState Values
//     // 0 : request not initialized
//     // 1 : server connection established
//     // 2 : request received
//     // 3 : processing request
//     // 4 : request finished and response is ready

//     //HTTP Statuses
//     // 200 = OK
//     // 403 = FORBIDDEN
//     // 404 = NOT FOUND
// }

// WORKING WITH JSON

document.getElementById('button1').addEventListener('click', loadCustomer);

// Load single customer

function loadCustomer(e) {
    const xhr = new XMLHttpRequest();

    xhr.open('GET', 'customer.json', true);

    xhr.onload = function() {
        if(this.status === 200) {
            // console.log(this.responseText)

            const customer = JSON.parse(this.responseText);

            const output = `
            <ul>
            <li> ID:  ${customer.id} </li>
            <li> Name:  ${customer.name} </li>
            <li> Company:  ${customer.company} </li>
            <li> Phone:  ${customer.phone} </li>
            </ul>
            `

            document.getElementById('customer').innerHTML = output;
        }
    }

    xhr.send();
}

// Load all customers

function loadCustomers(e) {
    const xhr = new XMLHttpRequest();

    xhr.open('GET', 'customers.json', true);

    xhr.onload = function() {
        if(this.status === 200) {
            // console.log(this.responseText)

            const customers = JSON.parse(this.responseText);

            let output = '';

            customers.forEach(function(customer) {
            output += `
                    <ul>
                    <li> ID:  ${customer.id} </li>
                    <li> Name:  ${customer.name} </li>
                    <li> Company:  ${customer.company} </li>
                    <li> Phone:  ${customer.phone} </li>
                    </ul>
                `
            });

            document.getElementById('customers').innerHTML = output;
        }
    }

    xhr.send();
}