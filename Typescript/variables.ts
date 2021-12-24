/* 
 *For creating the varibales in function typescript we should use three keywords

 1. var ->  we used to create varible for global scoped or function scoped
 2. let -> we use to create local scopped varibales or block scoped
 3. const -> we use  to create constant varibals or local or blocke scopped variables

 let and const introduced in version ES6-> Ecma Script 2015 edition

 * let and const is not accessible outside of the block but var is accesible out side of the block
 * let and const is not accessible outside of the block but var is accesible out side of the block
 * we can not redeclare and reassign const variable;
 * We can not redeclare let variable but we can reassign
 * we can redeclare and reassign var variables
*/

// GLobal object in Javascript is "Window"

// const y = 20;

{
    var x = 10;
    let obj = {x: 10, y:10};
    const y = 20;
    
}

{
   console.log('x', x); 
   console.log('obj', obj);// refere
}

function fun(){
    var x = 10;
    let obj = {x: 10, y:10};
    const y = 20;
}
console.log('y', y);