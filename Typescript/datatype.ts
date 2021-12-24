/* 
  1. Premitive data type-> string, number, boolean, voide, unknown, any etc
  2. Non-premitive -> Array, Object, Map, Set, Date etc
*/

/* 
  Synax to associate data type with variables

  variable_keyword(let, var, const) varible_name: data_type;
*/

var x:number = 10;
let y:boolean;

y=true;

const full_name:string = 'Prajna'; 

var nullvalues:void;

nullvalues = undefined;

var date: Date = new Date()

// Return type for function
function fun(): Date{
    return new (Date);
}

console.log(fun());// undefines

