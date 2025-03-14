// Function 1: receivesAFunction
function receivesAFunction(callback) {
    // Call the provided callback function
    callback();
  }
  
  // Function 2: returnsANamedFunction
  function returnsANamedFunction() {
    // Return a named function
    return function namedFunction() {
      console.log("I am a named function!");
    };
  }
  
  // Function 3: returnsAnAnonymousFunction
  function returnsAnAnonymousFunction() {
    // Return an anonymous function
    return function () {
      console.log("I am an anonymous function!");
    };
  }