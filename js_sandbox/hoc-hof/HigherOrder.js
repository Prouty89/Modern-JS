// Higher Order Functions


// One level of functionality
// function hello(){
//     console.log('Hello')
// };

// hello();

// HOC
function sing(callback){
    console.log('la la la la')
    if(callback){
    callback();
    }
}

function meow(){
    console.log("meow meow")
}
sing(meow)

// Array examples (methods that are HOC)  -> map(), sort(), reduce(), filter()


// Switch Statements: Control structure used to perform different actions based on different conditions
let day;


switch (new Date().getDay()){
    case 0:
        day = "Sunday";
            break;
    case 1:
        day = "Monday";
            break;
    case 2:
        day = "Tuesday";
            break;
    case 3:
        day = "Wednesday";
            break;
    case 4:
        day = "Thursday";
            break;
    case 5:
        day = "Friday";
            break;
    case 6:
        day = "Saturday";
            break;
    case 7:
        day = "Sunday";
            break;
}

console.log(day);


var Animal = 'Giraffe';
switch(Animal) {
    case 'Cow':
    case 'Giraffe':
    case 'Dog':
    case 'Pig':
        console.log('This animal will be on Noah\'s Ark.');
        break;
    case 'Spoon':
        console.log('A spoon is not an animal!');
        break;
    case 'Dinosaur':
        default:
            console.log('This animal will not be on the Ark')
};

console.log(Animal)
