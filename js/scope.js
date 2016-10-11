"use strict";

(function sayHello() {
    var myNameIs = 'Patrick';
    console.log('Hello ' + myNameIs + '!');
})();

(function isOdd()  {
    var random = Math.floor((Math.random()*100)+1);
    console.log('Random number is ' + random);
    (random % 2 != 0) ? console.log('Number is odd') : console.log('Number is even');
})();


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