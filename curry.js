// A curried function is a function that takes multiple arguments one at a time. 
// Given a function with 3 parameters, the curried version will take one argument and return a function that takes the next argument, which returns a function that takes the third argument. 
// The last function returns the result of applying the function to all of its arguments.

// It can be helpful for making code easier to read and compose.

var greet = function(greeting, name, myName) {
    console.log(greeting + ", " + name + " " + "I'm" + " " + myName);
  };
  console.log(greet("Hello", "Heidi", "Michelle")); //"Hello, Heidi"