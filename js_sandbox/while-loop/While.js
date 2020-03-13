/* While, Do While */
// While something is true, run statements

var n = 0;

while (n <5) {
    n++;

    if(n ===3) continue; // return to top;
    if(n ===3) break; // break out of entirely;
    console.log( 'n =' +n);
}

var i = 0;

do {
    i++;
    console.log("i = "  + i);
} while (i <5);