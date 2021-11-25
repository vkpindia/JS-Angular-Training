interface EmpI {
    fname: string;
    lname: string;
    age: number;

    printData(): void;
}

class Employee implements EmpI{
   public empID: number = 0; 
   public fname: string = '';
   public lname: string = '';
   public age: number = 0;

   constructor(empID: number, fname: string, lname: string, age: number){
        this.empID = empID;
        this.fname = fname;
        this.lname = lname;
        this.age = age;
   }

   printData(): void {
    let data = `
      Employee ID: ${this.empID}\n
      First Name: ${this.fname}\n
      Last Name: ${this.lname}\n
      Age: ${this.age}
    `;
    console.log('Employee Data', data);
   }

}

var emp = new Employee(1027, 'Ashok', 'Kumar', 35);

emp.printData();