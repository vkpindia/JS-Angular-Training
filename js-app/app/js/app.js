/* var stu_name = 'Maitri';
let x = 10;
const y = 20; */

/* 
 * Variables stores the data value that be chaged later
 * We can say varibables are nothing but memory location name to
 * identify name of that location where data is stored
 *  
 * In JavaSCript we can declare variables using reserve keywords 
 * var, let and const
 * Initially there is only one type of keyword that was var
 * But later when ES6 released thet two more keyword came those are
 * let and const
 * 
*/


// Variable declaration based on Scope

/*
* Var is a global scoped or function scoped keyword
* let and const are local scoped keywords 
*/



{
    //Block
    var stu_name = "Sauvik"; // global scopped
    let x = 40; // block scopped
    const y = 30; // block scopped
    
    console.log('y', y);     // 30
    console.log('x', x);    // 40
    console.log('stu_name', stu_name); // Sauvik
}
   /* console.log('Varables behaviour outside of block')
    console.log('y', y);     // 30
    console.log('x', x);    // 40
    console.log('stu_name', stu_name); // Sauvik */


//Function declaration and defination
function testVariableScope(){
    var studentName = 'XYZ';
    console.log('studentName', studentName);
}

//Function call
testVariableScope();


/* Diffrentiate based on for loop */

// var can be redeclarable and re-intializable
// variables with let can not redeclare but can be re-iniatizable 

/* let x;
let x; */
/* for(let i=0; i<5; i++){
    console.log('i', i);//
}
console.log('i', i);//reference error: i is not defined
for(var i=0; i<5; i++){
    console.log('i', i);//
}
console.log('i', i);//reference error: i is not defined */

// var foo = 50;
function testVar(){
    var foo = 30;
    console.log('foo_1', foo);//30
    foo = 1;
    console.log('foo_1', foo);//1
    var foo = 101;
    console.log('foo_1', foo);//101
}

//function call
// testVar();
// console.log('foo_2', foo);//reference error: foo is not defined

function testVar(){
    let foo = 30;
    console.log('foo_1', foo);//30
    foo = 1;// reassigning
    // var foo = 101;// foo can not re declared
    console.log('foo_1', foo);//1
    console.log('foo_1', foo);
}

// testVar();
// console.log('foo_2', foo);//

const name = 'Smith';
/* name = 'Scott'; // typeerror: assignment
console.log('name_1', name); */

// if any javascript collection is declared using const keyword
// that is mutable, we can append the data or we can change the data
// But we can not reassign collection

const obj = {
    name: 'Scott',
    course: 'Web developement',
    address: 'Delhi'
};

// obj = {};
obj['email'] = 'scott@gmail.com'
console.log('name_1', obj.name);
obj.name = 'Merry';
console.log('email', obj.email);


// Hoisting with let var and cost
console.log('data', data);// undefined
console.log('foo', foo);// reference error

var data = 'foo';
let foo = 'foo';

console.log('data', data);// foo
console.log('foo', foo);// foo