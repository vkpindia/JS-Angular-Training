var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Person = /** @class */ (function () {
    function Person(name, age) {
        this.name = name;
        this.age = age;
    }
    Person.prototype.showPersonDeatils = function () {
        console.log('age', this.name); // 35
        console.log('course', this.age); // Angular
    };
    return Person;
}());
var Student = /** @class */ (function (_super) {
    __extends(Student, _super);
    function Student(name, age, sid, course) {
        var _this = _super.call(this, name, age) || this;
        _this.sid = sid;
        _this.course = course;
        return _this;
    }
    Student.prototype.showStudentDetails = function () {
        console.log('sid', this.sid); // 1024
        console.log('name', this.name); // Smith
        console.log('age', this.age); // 35
        console.log('course', this.course); // Angular
    };
    return Student;
}(Person));
var obj = new Student('Smith', 35, 1024, 'Angular');
// Person Details
obj.showPersonDeatils();
// Student Details
obj.showStudentDetails();
