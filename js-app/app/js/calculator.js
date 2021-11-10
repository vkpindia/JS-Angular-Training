/* 
 * To make calculator with all types of basic calculations by using single method
 * Perform Addition, Subtarction, Multiplcation and Division
 * Hint: Use Parameters to use sigle method for Calculation
*/

// Function call
// calculateData();// executed successfully

function calculateData(){
    let num1 = document.getElementById('num_1');
    
    let num2 = document.getElementById('num_2');

    let resultElement = document.getElementById('result');

    // let result = parseInt(num1.value) + parseInt( num2.value);
    let result = Number(num1.value) + Number( num2.value);

    // resultElement.innerHTML = "<span>Result:</span> "+result;
    resultElement.innerText = "Result: "+result;

    num1.value = "";
    num2.value = "";
}

// Function call
// calculateData();

// Function expression

/* 
 * JS allows to assign a function in a variable then use that variable as a function.
 * it is called function expression
 * 
 * In function expression if you will call before declaration you will get error
 * Everytime for FE you should make call after function declaration
*/


/* let result =  add(10, 20); // Error: add is not a function
console.log('result', result); // 30 */

var add = function sum(val1, val2){
    return val1 + val2;
}

let result =  add(10, 20);
console.log('result', result); // 30

// Anonymous Function

/* 
 * JS Allows us to define function without any name
* This unnammed call anonymous function
* It is very helpful for callback function concept and for IIFE concept
*/


var addition = function(val1, val2){
    return val1 + val2;
}

// function call

let res = addition(55, 46);
console.log('res', res);

// Anonymous function with callback


function multiplication(num1, num2, callback){
    console.log('mul', num1*num2);
    callback(num1, num2);
}

multiplication(10, 20, function(num_1, num2){
    console.log('addion', num_1+num2);
});