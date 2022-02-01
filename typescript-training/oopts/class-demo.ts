// Create a typescript programe to demostrate usage of class


class Student {
    public sid: number = 1025;
    public sname: string = 'scott';

    public showData(): void{
        console.log('sid', this.sid);
        console.log('sname', this.sname);
    }
}

// Object creation

var stuObj = new Student();
stuObj.showData();






