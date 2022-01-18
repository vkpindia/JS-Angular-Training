/**
 * Arrow function also known as fat arrow function it is used to
 * to make anonymous function JS
 *
 * We use arraow function for shorthand methods...Shorthand methods
 * means we do have the body and the function keyword
 * while declaring the method
 *
 * Arraow function also called as lambda function in Java and
 * python programming
 *
 * we use '=>' sumbol for denoting a function as a arrow function in JS and TS
 *
 * for single statement in arrow function should not use return keyword
 * without method body
 *
 * Arrow function does not accept 'arguments' object as a function
 * parameter
 *
 * Mostly arraow functions we use for calback method and for linear function body
 *
 *
 * Syntax**
 *
 *   let sum = (x, y)=>{
 *      // statement
 *    }
 *
 *
 * let sum_1 = (x, y)=> x+y;
 *
 *
 * Method Call:
 * let abc = sum(10, 20);
 * let xyz = sum(10, 20);
 *
*/
var xyz = function () {
    console.log('arguments', arguments);
};
/* let printData = ()=>{
console.log('arguments', arguments);
} */
var printData = function () { return console.log('Welcome to Ashok'); };
var displaySum = function (x, y) { return x + y; };
printData();
var sum = displaySum(10, 20);
console.log('sum', sum);
xyz();
