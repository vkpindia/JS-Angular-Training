/* 
  * Function->

Based on parameter
1. Parameterized
    Optional Parameter
    Default Parameters
    Rest parameters
2. Non-Parameterized 
*/

/* 
  1. Parameterized Syntax:

  function f_name(param1:r_type, param2:r_type, param3:r_type,....paran_n:r_type): return_type{

  }

2. Non-Parameterized Syntax:

  function f_name(): return_type{

  }

  Optional Parameter Syntax:
  function f_name(param1:r_type, param2?:r_type, param3?:r_type): return_type{
    
  }

  f_name(param1);

  3. Rest Parameters: 
  function f_name(...restArr:any[]): return_type{
    for(let i=0; i<restArr.length; i++){
        console.log(restArr[i])
    }
  }

  f_name(p1, p2, p3, p4,.....pn);

  * All the parameters should the same type
  
  */


// Exa:
function printName(fName:string, lName?:string){
console.log('fName', fName);

if (lName!='undefined') { 
    console.log('lName', lName);
}

}

function printNumber(number1?:number){
   console.log('printNumber', number1);
}

printName('Ashok');// Ashok, Undefined
printName('Ashok', 'Kumar');// Ashok, Kumar

printNumber();
printNumber(10);


/* 
  *Note: Ensure to declare optional parameters in the last of parameters 
  * Mandatory parameter will come first and optional parametrs will be the last
*/


/* 
 * Default Parameters:
   function f_name(param1:r_type, param2:r_type=value): return_type{
    
  }
*/

function printStudentDetails(sName:string, course:string, sAge:number=18,): void{
    console.log('sName', sName);
    console.log('course', course);
    console.log('sAge', sAge);
}

printStudentDetails('Scott', 'Angular')// Scott, Angular, 18

/* 
  * Note: Default parameters also should come in last while declaring parametrs
*/


function printAverage(...numArr:number[]): void{
    let num = 0;
    for(let i=0; i<numArr.length; i++){
        num+=numArr[i];
    }

    let avg = num/numArr.length;
    console.log('avg', avg);
  }

  printAverage(23, 56, 78);
  printAverage(23, 56, 78, 79, 67);
  printAverage(23, 56, 78, 79, 67, 90, 40);