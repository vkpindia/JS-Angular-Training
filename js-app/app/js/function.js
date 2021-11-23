/* 1. In javaScript, function is a named block of set of statements/instruction to perform 
specific action/task
* Javascript allows to define a block of code and it gave a name and the execute as
* requirment
* After defining a function for performing action we have execute to get the result
* For executing or performing action we have to call the fucntion
* JavaSCript function can be defined using 'function' keyword
*/

/* 
* Syntaxt:
  //defining a function

  fucntion <function_name>(){
      // write set of statements
  }

  // calling function

  <function_name>();
*/

//Example 

function showMessage() {
    alert("Hellow World!!");
}

// function call

// showMessage();

var message = "Hello World!!";

/* 
 * Function Parameter: 
*/

function getFullName(firstName){
    console.log('firstName', firstName); // undefined
}


/* 
 * If you multiple parameters and you are supplying less values at the time function call
 * rest parameters will be undefined
*/
function getName(firstName, lastName){
    console.log('firstName', firstName);// Ashok
    console.log('lastName', lastName);// Reddy
}

// function call
getFullName();


/* Method can be called multiple times */
getName('Ashok');
getName('Ashok', 'Reddy');
getName('James', 'Bond');



/* 
 * Arguements Object:

 * All the function in javascript can use arguements object by default
 * It consists all the value of function parameter
 * The values will be produce as a Array
 * Arow function does not supprt arguements object in JS
*/

function getAverage(){
//   console.log('average', arguments);
  let sum = 0;
  for(let i = 0; i<arguments.length; i++){
      sum = sum + arguments[i];
  }
  let average = sum/arguments.length;
  console.log('average', average);
}

getAverage(10, 20, 30, 40, 50);



/* 
 * Return Value
 * If you have not returned any value in jS with return keyword
 * This it will return 'undfined'
*/

function sum(num_1, num_2){
    return num_1+num_2;
}

let addition = sum(10, 20);
console.log('addition', addition);// 30

function multiply(val1, val2) {
    console.log(val1, val2);
}

let mul =  multiply(5, 2);
console.log('mul', mul);// undefined


/* 
 * Nested Function
*/

function multiple(num_1){
   function fn(num_2){
    return num_1 * num_2;
   }

   return fn;
}

let multipl = multiple(15);

let result = multipl(7);

console.log('result', result);