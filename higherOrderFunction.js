// A higher-order function is any function that takes one or more functions as arguments, which it uses to operate on some data, and returns a function as a result.

// Higher-order functions are meant to abstract some operation that is performed repeatedly.

[1, 2, 3, 4].map(function(n){
    return n * 2
}) // [ 2, 4, 6, 8 ]

// The map function is one of the many higher-order functions built into the language. sort, reduce, filter, forEach are other examples of higher-order functions built into the language.