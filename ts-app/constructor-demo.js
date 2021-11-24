var Student = /** @class */ (function () {
    function Student(id, name) {
        this.sid = id;
        this.sname = name;
    }
    Student.prototype.showData = function () {
        console.log('sid', this.sid);
        console.log('sname', this.sname);
    };
    return Student;
}());
// Create Object
var obj = new Student(1026, 'Smith');
//calling class method
obj.showData();
// Create Object
var obj_2 = new Student(1027, 'Sandy');
//calling class method
obj_2.showData();
