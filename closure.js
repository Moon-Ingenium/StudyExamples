// A closure is the combination of a function bundled together (enclosed) with references to its surrounding state (the lexical environment). In other words, a closure gives you access to an outer function’s scope from an inner function. In JavaScript, closures are created every time a function is created, at function creation time.

function makeFunc() {
    var name = 'Friend';
    function displayName() {
      alert("Hi" + " " + name);
    }
    return displayName;
  }
  
  var myFunc = makeFunc();
  myFunc();

//   Essentially, we have a function within another function called as the return