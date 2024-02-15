"use strict";

/* never do this
totalGlobalVaribale = "Never do dis";

reserved keywords:
const arguments;
const public;

use const whenever possbile, else use let
about const:
const cannot be undeclared or redeclared
but its value can be changed as long as you dont change the assignment
*/

// global scope

function functionScope() {
    // function scope
}

{
    // block scope
    console.log('block scope')
}

{
    var someValue = true;
    {
        var someValue = false;
    }
    console.log(someValue);
}

{
    let someValue = true;
    {
        let someValue = false;
    }
    console.log(someValue);
}

for(var i = 0; i <=5; i++) {
    setTimeout(() => {
        console.log(i);
    }, 1000)
}