var Employee = /** @class */ (function () {
    function Employee(empID, fname, lname, age) {
        this.empID = 0;
        this.fname = '';
        this.lname = '';
        this.age = 0;
        this.empID = empID;
        this.fname = fname;
        this.lname = lname;
        this.age = age;
    }
    Employee.prototype.printData = function () {
        var data = "\n      Employee ID: " + this.empID + "\n\n      First Name: " + this.fname + "\n\n      Last Name: " + this.lname + "\n\n      Age: " + this.age + "\n    ";
        console.log('Employee Data', data);
    };
    return Employee;
}());
var emp = new Employee(1027, 'Ashok', 'Kumar', 35);
emp.printData();
