// Create a typescript programe to demostrate usage of class
var Student = /** @class */ (function () {
    function Student() {
        this.sid = 1025;
        this.sname = 'scott';
    }
    Student.prototype.showData = function () {
        console.log('sid', this.sid);
        console.log('sname', this.sname);
    };
    return Student;
}());
// Object creation
var stuObj = new Student();
stuObj.showData();
