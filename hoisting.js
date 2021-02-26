// Hoisting is a JavaScript mechanism where variables and function declarations are moved to the top of their scope before code execution. 
// Inevitably, this means that no matter where functions and variables are declared they are moved to the top of their scope regardless of whether their scope is global or local.

var x; // x is global
function example(){
    x = 5;
    document.getElementById("demo").innerHTML = x;
}
// VS 

function example(){ 
    x = 5;
    document.getElementById("demo").innerHTML = x;
    var x; // x can be created after it's use;
}

carName = "Volvo";
const carName; // This will result in a syntax error and not run

