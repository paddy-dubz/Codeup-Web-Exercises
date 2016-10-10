"use strict";

var myNameIs = 'Patrick'; // TODO: Fill in your name here.

function sayHello(name) {
    console.log('Hello ' + name + '!');
}
sayHello(myNameIs);

// TODO:
// Create a function called 'sayHello' that takes a parameter 'name'.
// When called, the function should log a message that says hello from the passed in name.

// TODO: Call the function 'sayHello' passing the variable 'myNameIs' as a parameter.

// Don't modify the following line
// It generates a random number between 1 and 100 and stores it in random
var random = Math.floor((Math.random()*100)+1);

// TODO:
// Create a function called 'isOdd' that takes a number as a parameter.
// The function should use the ternary operator to log a message.
// The log should tell the number passed in and whether it is odd or not.

console.log('Random number is ' + random);

function isOdd(number)  {
    (number % 2 != 0) ? console.log('Number is odd') : console.log('Number is even');
}


// TODO: Call the function 'isOdd' passing the variable 'random' as a parameter.

isOdd(random);

function add(a, b)  {
    var sum = a + b;
    return sum;
}

function subtract(a, b)  {
    var dif = a - b;
    return dif;
}

function multiply(a, b)  {
    var multi = a * b;
    return multi;
}

function divide(a, b)  {
    var div = a / b;
    return div;
}

function square(number) {
    return multiply(number, number);
}

function sumOfSquares(a, b) {
    return square(a) + square(b);
}