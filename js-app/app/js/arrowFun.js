// Arrow Function

/* 
 * Arrow function is a shorhand function expression that we use
 * to write for one linear expression or for callback function
 * It is called anonymous with expression
 * Arrow function does not allow retrun expression withous function body
 * And also it does not refer its own this and also it does not allow to use 
 * Arguements object 
*/

//Syntax

// var var_name = (arg1, agr2, ar3...., agrN) => expression;

let adition = (a, b)=>a+b;
let summation = (a, b)=>{ return a+b};

let age = prompt("What is your age?", 18);

let welcome = (age<18) 
                ? ()=> alert('Hello') 
                : ()=> alert('Greetings!');
welcome();



function sum(a, b){
    let sum = a + b;
    return sum;
}

//function call
let add = sum(10, 20);
console.log('add', add);

// fname and lname store the value as a string and callback is function
function fullname(fname, lname, callback) {
    let fullname = fname + ' ' + lname;
    console.log('fullname', fullname);

    callback(fname, lname);
}

fullname('James', 'Bond', (fname, lname)=>alert('Success!!'));

