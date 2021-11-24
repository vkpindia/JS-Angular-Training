var Student = /** @class */ (function () {
    function Student() {
        this.sid = 1024;
        this.sname = 'Scott';
    }
    Student.prototype.showData = function () {
        console.log('sid', this.sid);
        console.log('sname', this.sname);
    };
    return Student;
}());
// Create Object
var obj = new Student();
//calling class method
obj.showData();
