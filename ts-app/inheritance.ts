class Person {
    public name: string;
    public age: number;

    showPersonDeatils(){
        console.log('age', this.name);// 35
        console.log('course', this.age);// Angular
    }
}

class Student extends Person{
    public sid: number;
    public course: string;

    showStudentDetails(): void {
        console.log('sid', this.sid);// 1024
        console.log('name', this.name);// Smith
        console.log('age', this.age);// 35
        console.log('course', this.course);// Angular
    }
}

var obj = new Student();
obj.name = "Smith";
obj.age = 35;
obj.sid = 1024;
obj.course = "Angular"

// Person Details
obj.showPersonDeatils()

// Student Details
obj.showStudentDetails();


