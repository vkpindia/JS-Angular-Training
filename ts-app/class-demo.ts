class Student {
    public sid: number = 1024;
    public sname: string = 'Scott';


    public showData(): void{
        console.log('sid', this.sid);
        console.log('sname', this.sname);
    }
}

// Create Object
var obj = new Student();

//calling class method
obj.showData();