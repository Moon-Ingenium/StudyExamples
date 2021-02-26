// The Promise object represents the eventual completion (or failure) of an asynchronous operation and its resulting value.
// Benefits include escaping callback hell 
const promiseA = new Promise( (resolutionFunc,rejectionFunc) => {
    resolutionFunc(777);
});
promiseA.then( (val) => console.log("asynchronous logging has val:",val) );
console.log("immediate logging"); // open the console to see the magik