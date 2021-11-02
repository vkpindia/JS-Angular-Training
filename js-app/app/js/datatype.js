// Data Type:

/* 
* JavaScript does not support explicit data types
* Thats why JS called loosely types scripting/proramming language
*
* Data type indicates the characteristics of the data
* and it tells the compiler/inter-preter whether value is number, string,
* boolean or dates
*/

// There are two types of Data Type in JavaSCript

/* 
 * 1. Premitive Type: Means the data whitch contains the single value
 * like: number, boolean, string, null, undefined, BigInt(2^53-1 to -2^53-1)
 * 2. Non-Premitive Type: Means the data type which contains multiple 
 * values like js object, array, date, Map, Set, WeakSet, WeakMap, Symbol type
 * object (collection of properties)
 * array (indexed data collection)
*/

var a = null;
const x = {
  
};
console.log('x', typeof x);//object(data type in JS)

console.log('a', a); // 10
console.log('type of a', typeof a);
// console.log('type of fruits', typeof fruits);// object
a = 'Angular';
console.log('a', a); // Angular

// typeof operator
console.log('type of a', typeof a);

const obj_1 = {
    id: 0245,
    name: 'Scott',
    course: 'Web developement',
    address: 'Delhi',
    phone: '9867564536',
    isEligible: false,
    food: []
};

var fruits = ['Apples', 'Orange', 'Banana', 'Grapes'];

if(typeof fruits == 'object'){
    console.log('typeof obj', typeof obj_1 == 'object');
  // logic
} 
if(Array.isArray(fruits)) {
    console.log('Array.isArray(fruits)', Array.isArray(obj_1));
    console.log('Array.isArray(fruits)', fruits[0]); // Apple
    console.log('Array.isArray(fruits)', fruits[1]); // Orange

    fruits.forEach(function(data, index){
        console.log('data', data, 'index', index);
    })
    
  // logic
}

