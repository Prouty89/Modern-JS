### Modern JS presented by Udemy, Brad Traversy  

# Data Types in JavaScript

## **Primitive and Reference**

### <ins>Primitive</ins>: 

Stored directly on the location the variable accesses, stored on the stack

- String `'Hello VVorld'` 
- Number `2` 
- Boolean `true` or `false`
- Null `null`
- Undefined `undefined` 
- Symbols (ES6) markers that make objects iterable. 

### <ins>Reference:</ins> Accessed by reference. Objects that are stored on the heap. A pointer to a location in memory. 

Arrays: `[1, 2, 3, 4, 5]` 


**Objet Literals:**

```javascript
    const myObject = {
        make: 'Audi' 
        model: 'A3' 
        year: 1999
}
```

**Functions:**  

Block of code designed to perform a particular task. It is executed when something invokes, or calls it.    
```javascript
    function myFunction(p1, p2) {
      return p1 * p2;  // The function returns the product of p1 and p2
    }
```
- JavaScript Function Syntax

The code to be executed, by the function, is placed inside curly brackets: {}

- Function Returns

```javascript
    let x = myFunction(4,3); //Function call, returned favlue will end up in x

    function myFunction(a,b) {
        return a * b; // Function return, the product of a and b
    }
```

- Functions used as Variable Values

```javascript
    var x = to Celcius(77);
    var text = "The temperature is " + x + "Celsius";
    //or
    var text = "The temperature is" + toCelcius(77) + "Celsius";
```

- Arrow function!!! (ES6)

Provide shorter function syntax 

```javascript
    hello = function() {
        return "Hello World";
    }

    //Becomes

    hello = () => "Hello World!";

    // however, this is only possible when the function has only one statement. 
```

**Dates**

Date objects are created with the `new Date()` constructor. 

```javascript
    new Date()
    new Date(year, month, day, hours, minutes, seconds, milliseconds)
    new Date(milliseconds)
    new Date(date string)

    var d = new Date()
    console.log(d) // Sat Nov 09 2019 11:27:47 GMT-0600 (Central Standard Time) Will use the browsers time. 
```

As a dynamically typed language

- Types are associated with values not variables
- The same variable can hold multiple types
- We do not need to specify types
-  Most other languages are statically typed (Java, C#, C++)
-  THere are supersets of JS and addons that allow static typing (TypeScript, Flow)

