// Hoisting is a JavaScript mechanism where variables and function declarations are moved to the top of their scope before code execution. 
// Inevitably, this means that no matter where functions and variables are declared they are moved to the top of their scope regardless of whether their scope is global or local.

function example(){
    var x = 5;
    document.getElementById("demo").innerHTML = x;
}

// VS 

var x;
x = 5;

function example(){
    document.getElementById("demo").innerHTML = x;
}