function fun1() {
    console.log('Welcome to Tyoescript Training');
}
function fun2(uname) {
    console.log('Welcome to ', uname);
}
function fun3(x, y) {
    return x + y;
}
function fun4(fName, lName) {
    return fName + ' ' + lName;
}
function fun5(fname) {
    return function (lname) {
        return fname + ' ' + lname;
    };
}
// Function Call
fun1();
fun2('Ashok Reddy');
var sum = fun3(5, 12);
console.log('sum', sum);
var fullName = fun4('Ashok', 'Reddy');
console.log('fullName', fullName);
var fullName_1 = fun5('Ashok')('Reddy'); // Ashok Reddy
console.log('fullName_1', fullName_1);
/* let sum_1 = fun6(3)(2)(4) // 24 */
/*
  1. Default Parameter:

  Default parameters always should be defined in the last of the
  parameters sequence
*/
/* function printData(firstName:string, lastName: string, age:number=18){
    console.log('firstName', firstName);
    console.log('lastName', lastName);
    console.log('age', age);
}

printData('Ashok', 'Reddy', 35);
printData('Ashok', 'Kumar'); */
/*
  1. Optional Parameters:

  Optional parameters always should be defined in the last of the
  parameters sequence

  Optional parameters we make by using turnery operator(?) before
  the type of parameter

*/
function printData(firstName, lastName, age) {
    console.log('firstName', firstName);
    console.log('lastName', lastName);
    console.log('age', age);
}
printData('Ashok', 'Kumar');
printData('Ashok', 'Kumar', 67);
/*
  1. Rest Parameters:

  Rest parameter always should be defined in the last of the
  parameters sequence while the declaring the method

 we use rest or spread operator(...) and then param name
 And the param which is used as a rest param that should be
 defined as a array type


 The rest param  always should come in the last

*/
function calculateAverage() {
    var num = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        num[_i] = arguments[_i];
    }
    console.log('num', num);
    var sum = 0;
    num.forEach(function (element) {
        sum += element;
    });
    var avg = sum / num.length;
    console.log('avg', avg);
}
calculateAverage(10, 20, 30, 30, 50);
