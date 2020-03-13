// For Loop

// Runs for a specific amount of times

// for([initialization]; [condition]; [final-expression]) {}

var ourArray = [];
for(var i = 0; i < 5; i++) {
    if(i > 2) break;
    ourArray.push(i)
}

console.log(ourArray);

var arr = [10,9,8,7,6];
for(var i = 0; i < arr.length; i++) {
    console.log(arr[i])
}

var arrays = [
    [1, 2], [3, 4], [5, 6]
];

for(var i=0; i < arrays.length; i++) {
    for(var j=0; j < arrays[i].length; j++){
        console.log(arrays[i][j]);
    }
}