// Craete a programe to demonstrate usage of function

function f1(): void {
    console.log('Welcome to typescript');
}

function f2(uname: string): void {
    console.log('Welcome to typescript', uname);
}

function f3(x: number, y: number): number {
    var z = x + y;
    return z;
}

// Function call

f1();
f2('Scott');
var sum = f3(10, 20);
console.log('sum', sum);


/* 
  NOTE: there is  not meaning to assign void to a variable
  only null and undefined are assinable to type void;
*/

// Create a function to demonstrate funation paraters type

/* 
  Optional parameters
*/
function studentDetails(sid: number, sname: string, email?: string): void {
    var studentDetail = `id: ${sid}\n Name: ${sname}\n Email: ${email ? email : ''}`;
    console.log('studentDetail', studentDetail);
}

/* 
 Default Parameters
*/
function csDetails(csid: number, cname: string, duration: number = 30): void {
    var str = `Course ID: ${csid}\n Course Name: ${cname}\n Course Duration: ${duration}`
    console.log('csDetails', str);
}

// Function Call

studentDetails(1024, 'Scott');
studentDetails(1025, 'Smith', 'smith@gmail.com');

csDetails(1026, 'Angular');
csDetails(1026, 'Angular', 45);


// Rest Parameter demo

function sum_2(...sum: number[]): void{
    var total: number = 0;

    /* for(let num of sum){
        total = total + num;
    } */

    /* for(let i in sum){
        total = total + sum[i];
    } */

    sum.forEach(item=>{
        total = total + item;
    });
    
    console.log('total', total);
}

// Function call

sum_2(10, 20);
sum_2(10, 20, 30);
sum_2(10, 20, 30, 40);
sum_2(10, 20, 30, 40, 50);
sum_2(10, 20, 30, 40, 50, 60);
sum_2(10, 20, 30, 40, 50, 60, 70);
sum_2(10, 20, 30, 40, 50, 60, 70, 80);
sum_2(10, 20, 30, 40, 50, 60, 70, 80, 90);

