function sayHello(str) {
  console.log(`Hello ${str}`);
}

// sayHello("class");

// sayHello("John");

var message = "class";

sayHello(message);

var sayHello = require("./sayHello");

var message = sayHello("Kenny!");
console.log(message);

var theSum = sumArray([1, 2, 3, 4]);
console.log(theSum);

function sumArray(arr) {
  var total = 0;
  for (var i = 0; i < arr.length; i++) {
    total += arr[i];
  }
  return total;
}

console.log(sumArray([1, 2, 3, 4]));

var sayHello = require("./sayHello");
var sumArray = require("./sumArray");
var message = sayHello("Kenny!");
