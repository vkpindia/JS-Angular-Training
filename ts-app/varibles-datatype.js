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
    console.log('num1', num1); // 1
    console.log('num2', num2); // 2
    console.log('num3', num3); // compiler error: can not find name 'num3'
    console.log('num4', num4); // compiler error: can not find name 'num4'
}
varibaleDeclaraion();
