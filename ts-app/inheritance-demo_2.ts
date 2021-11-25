class Persons {
    public name: string;
    public age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    showPersonDeatils(){
        console.log('age', this.name);// 35
        console.log('course', this.age);// Angular
    }
}

class Students extends Persons{
    public sid: number;
    public course: string;

    constructor(name: string, age: number, sid: number, course: string) {
        super(name, age);
        this.sid = sid;
        this.course = course;
    }
    
    showStudentDetails(): void {
        console.log('sid', this.sid);// 1024
        console.log('name', this.name);// Smith
        console.log('age', this.age);// 35
        console.log('course', this.course);// Angular
    }
}

var obj = new Students('Smith', 35, 1024, 'Angular');

// Person Details
obj.showPersonDeatils()

// Student Details
obj.showStudentDetails();


