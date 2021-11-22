// Variables in TS
/*
 * TypeScript follows the same rules as JavaScript for variable declarations
  varibales can be declared using var, let and const

  *If we are using OOPS concept in TS the we can use let var and const for variable
  declaration.
*/
var employee = 'John'; // js
var employeeName = 'John'; //ts
var num1 = 1;
function varibaleDeclaraion() {
    var num2 = 2;
    if (num1 < num2) {
        // let num3: number = 3;
        var num3 = 3;
        num3++;
    }
    while (num1 < num2) {
        // let num4: number = 4;
        var num4 = 4;
        num1++;
    }
    console.log('num1', num1); // 2
    console.log('num2', num2); // 2
    console.log('num3', num3); // 4
    console.log('num4', num4); // 4
}
varibaleDeclaraion();
// Types in TypeScript
/*
 In typescript, a type is a convenient way to refer to the different properties/variables
 and functions that a value has

 A value is anything that you can assign to a varibale like number, string, an array
 an object and a function.
*/
console.log('length', 'hello'.length);
console.log('length', 'hello'.toLocaleUpperCase());
//Conclusion
/*
 * A type is a label that describes the different properties and method that a value has
 * every value has type
*/
// typescript types categorize in 
/* 1. Primitive type-> string, number, boolean, null, undfined, symbol
   2. Object types -> function, arrays, classes, tuples, object etc

   apart from these some other types are available:
   Enum, Union, Void, Never, Any
*/
/*
  *String: string is another premitive data type that is used store text
  string values always surrounded by single/double quotes
*/
var employeesName = 'John Smith';
var employeeDep = "Finance";
/*
  Template String: Since typeScript version 1.4, typescript has included supprt for es 6
  template strings. Template strings are used to embed expression into strings
  
*/
//pre es-6
var empDesc = employeesName + 'work in the' + employeeDep;
console.log('empDesc', empDesc);
//post es-6
var empdesc = employeesName + " work in the " + employeeDep;
console.log('empdesc', empdesc);
/*
 *String Methods

 charAt()
 concat()
 indexOf()
 replace()
 split();
 toUpperCase()
 ToLowerCase()
 includes()
 match()
 slice()
 startsWith()
 substr()
 substring()
 trim()
 trimLeft()
 trimRight()
*/
/*
 * Number Type: TypeScript also supprts number data type.
all numbers are stored as floating point numbers thaese can be decimal(base 10),
hexadecimal(base 16), octol(base 8)
*/
var first = 123; // decimal
var second = 0x37CF; // hexadecimal
var thirst = 255; //octol
var forth = 1939; //binary 
/*
 Number Methods:

 toExponential()
 toFixed()
 toLocalString()
 toPrecision()
 toString()
 valueOf()
*/
/*
 * Boolean Type: TypeScript also supprt  boolean data type and it store as
  true/false like

  
*/
var isInclude = true;
var isNumber = false;
/*
 * An array is a special type of data which can stor multiple values of
 diffrent data types using a special  syntax:


 1. Using square brackets
 2. Using generic type/by using Array constuctor function
*/
var fruits = ['Apples', 'Orange'];
var fruiutList = ['Apples', 'Orange'];
var fruiutList = new Array('Apples', 'Orange');
var ids = [1024, 1026, 1028];
var fruits1;
fruits1 = ['Apples', 'Orange'];
/*
 * Tuple Type: Tuple can contain two values of different datatypes
  its somethimg similar as array but the behaviour to storing the values
  is diffrent

  it can contain multiple type of data in a single array
*/
var empId = 10;
var empName = 'John';
var employeeData = [10, 'Smith'];
/*
 Note: For doing data operations in tuple we can use JS array methods and
 techniches to get or retrieve values or doing any operations
*/
/*
 * Any type: If we do not have prior knowledge about data which get assigned'
to a variale for that we can use any type;
*/
var str = 'Hellow World';
str = 10;
str = true;
str = [];
var arr = [];
var arrs = [10, 40];
