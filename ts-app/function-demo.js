// Craete a programe to demonstrate usage of function
function f1() {
    console.log('Welcome to typescript');
}
function f2(uname) {
    console.log('Welcome to typescript', uname);
}
function f3(x, y) {
    var z = x + y;
    return z;
}
// Function call
f1();
f2('Scott');
var sum = f3(10, 20);
console.log('sum', sum);
/*
  NOTE: there is  not meaning to assign void to a variable
  only null and undefined are assinable to type void;
*/
// Create a function to demonstrate funation paraters type
/*
  Optional parameters
*/
function studentDetails(sid, sname, email) {
    var studentDetail = "id: " + sid + "\n Name: " + sname + "\n Email: " + (email ? email : '');
    console.log('studentDetail', studentDetail);
}
/*
 Default Parameters
*/
function csDetails(csid, cname, duration) {
    if (duration === void 0) { duration = 30; }
    var str = "Course ID: " + csid + "\n Course Name: " + cname + "\n Course Duration: " + duration;
    console.log('csDetails', str);
}
// Function Call
studentDetails(1024, 'Scott');
studentDetails(1025, 'Smith', 'smith@gmail.com');
csDetails(1026, 'Angular');
csDetails(1026, 'Angular', 45);
// Rest Parameter demo
function sum_2() {
    var sum = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        sum[_i] = arguments[_i];
    }
    var total = 0;
    /* for(let num of sum){
        total = total + num;
    } */
    for (var i in sum) {
        total = total + sum[i];
    }
    sum.forEach(function (item) {
        total = total + item;
    });
    console.log('total', total);
}
// Function call
sum_2(10, 20);
sum_2(10, 20, 30);
sum_2(10, 20, 30, 40);
sum_2(10, 20, 30, 40, 50);
sum_2(10, 20, 30, 40, 50, 60);
sum_2(10, 20, 30, 40, 50, 60, 70);
sum_2(10, 20, 30, 40, 50, 60, 70, 80);
sum_2(10, 20, 30, 40, 50, 60, 70, 80, 90);
