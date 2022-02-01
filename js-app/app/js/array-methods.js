// Array
/* 
 * In general array is the collection/group of similar types of data
 * By ES, arrays are ordered list of data that can hold anyb types of datain each 
 * of the slots, i.e. number in the first, string in the second etc. 
*/

let numberArray = [10, 20, 30, 60, 'banana', true];
let strArr = ['apples', 'banana', 'orange'];

/* 
 * Based on the index values, there are two types Arrays:
 * 1. Numeric Arrays
 * 2. Associative Arrays
*/

// Creatig arrays

/* 
  * we can create array in two ways
  * 1. By Array literal
  * 2. By Array  COntructor function
*/


//By Array literal
let cities = ['Lucknow', 'Amehdabad', 'Mumbai'];

// By user constructor function
/* let fruits = new Array();
fruits.push('apples', 'banana', 'orange'); */
// let fruits = new Array('apples', 'banana', 'orange');

// To define size of and Array
let fruits = new Array(2);

for(let i=0; i<fruits.length; i++){
    fruits[i] = i+10;
}
/* fruits[0] = 'apples';
fruits[1] = 'banana';
fruits[2] = 'banana'; */
console.log('fruits', fruits);

//Multidimensional array

let grid = [
    [10, 20, 30, 40],
    [50, 60,[110, 120, [110, 120, [110, 120]]], 70, 80],
    [90, 100, 110, 120, [90, 100, [90, 100], 110, 120]]
];

// How to get the data from array
/* 
  * For retrieving from array, we can use for loop or forEach method
*/

for (let index = 0; index < fruits.length; index++) {
    const element = fruits[index];
    console.log('element', element);
}

/* cities.forEach((item, i, cities)=>{
    console.log('cities', cities);
    console.log('value, index:', item);
// console.log('index', index);
});

// To retrieving data from multidimensional array

for (let i = 0; i < grid.length; i++) {
    const element = grid[i];
    for (let j = 0; j < element.length; j++) {
        const ele = element[j];
        console.log('ele', ele);
        // grid[i][j]
        document.write("grid["+i+"]["+j+"] : " +grid[i][j]+"<br>");
    }
}

grid.forEach((element, i) => {
    element.forEach((item, j) => {
        console.log('item', item);
    });
}); */

function getArrayEle(arr){
    // debugger;
    if(arr && arr.length){
        arr.forEach(data=>{
            if(Array.isArray(data)){
                getArrayEle(data); 
            } else {
                console.log('data', data);
            }
        })
    }
}

getArrayEle(grid);

// List of Array methods

/* 
  * push()
  * pop()
  * concat()
  * join()
  * shift()
  * unshift()
  * slice()
  * sort()
  * splice()
  * reverse()
  * toLocaleString()
  * toString()
  * valueOf()
  * indexOf()
  * find()
  * findIndex()
  * lastIndexOf()
  * map()
  * forEach()
  * filter()
  * reduce()
  * some()
  * every()
  * includes()
*/

/* 
  * map()
  * map() executes the same code on every element in an array and returns a new array
  *  with the updated elements
*/

let consts = [100, 400, 300, 700];

let newCost = consts.map((costItem, index) =>{
    return costItem/10;
        console.log('costItem', costItem, index);
});
console.log('consts', consts);
console.log('newCost', newCost);

/* 
 * forEach(): is used to execute the same code on every element in an array but 
 * does not change the array and it returns undefines
*/

var newCosts = consts.forEach((costItem, index) =>{
    // consts[index] = costItem/10;
     console.log('costItem', costItem, index);
});
console.log('consts', consts);
console.log('newCost', newCosts);

/* 
  * filter(): checks every element in an array to see if it meets a certain 
condition and return a new array with the elements that satisfy the certain
criteria
*/

let newCostss = consts.filter((costItem, index) => costItem>200);
console.log('consts', consts);
console.log('newCost', newCostss);

var obj_1 = {
    empId: 1024,
    empName: 'Ashok',
    email: 'ashok@gmail.com',
    phone: '6745675498',
    companyName: 'West Corporation'
  };


  // for...in loop

  for(key in obj_1){
      console.log(key + ': ' + obj_1[key]);
  }

  // To getting keys of an object in an array

  let objKeys = Object.keys(obj_1);
  let objKeyValue = Object.values(obj_1);
  let objKeyValue1 = Object.entries(obj_1);
  console.log('objKeyValue', objKeyValue);
  console.log('objKeyValue1', objKeyValue1);
  console.log('objKeys', objKeys);
  