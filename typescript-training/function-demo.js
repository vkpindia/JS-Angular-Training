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
// Function Call
fun1();
fun2('Ashok Reddy');
var sum = fun3(5, 12);
console.log('sum', sum);
var fullName = fun4('Ashok', 'Reddy');
console.log('fullName', fullName);
