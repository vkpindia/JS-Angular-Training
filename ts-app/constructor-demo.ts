class Student {
    public sid: number;
    public sname: string;

    constructor(id: number, name: string){
        this.sid = id;
        this.sname = name;
    }

    public showData(): void{
        console.log('sid', this.sid);
        console.log('sname', this.sname);
    }
}

// Create Object
var obj = new Student(1026, 'Smith');

//calling class method
obj.showData();

// Create Object
var obj_2 = new Student(1027, 'Sandy');

//calling class method
obj_2.showData();