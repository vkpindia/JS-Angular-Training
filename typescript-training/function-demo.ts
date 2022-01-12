function fun1(): void{
    console.log('Welcome to Tyoescript Training');
}

function fun2(uname: string): void{
    console.log('Welcome to ', uname);
}

function fun3(x: number, y: number): number{
    return x+y;
}

function fun4(fName: string, lName: string): string{
    return fName+' '+lName;
}

function fun5(fname){
    return function(lname){
        return fname+' '+lname;
    }
}

// Function Call

fun1();
fun2('Ashok Reddy');
let sum = fun3(5, 12);
console.log('sum', sum);

let fullName = fun4('Ashok', 'Reddy');
console.log('fullName', fullName);


let fullName_1 = fun5('Ashok')('Reddy'); // Ashok Reddy
console.log('fullName_1', fullName_1);
/* let sum_1 = fun6(3)(2)(4) // 24 */