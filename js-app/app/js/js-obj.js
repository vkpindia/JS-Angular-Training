/* 
 * An object is a non-premitive type, structured data type in JS
 * Object are same as variable in javscript
 * The only difference is that an object holds multiple values in 
 * in terms of properties and mothds
*/

/* 
 * There are two ways to creating javascript Object
 * 1. Using Object literal
 * 2. Object contructor
 * 3. Using JS method 
*/

// Demostration

var obj_1 = {
  empId: 1024,
  empName: 'Ashok',
  email: 'ashok@gmail.com',
  phone: '6745675498',
  companyName: 'West Corporation'
}; // literal types object

var obj_2 = new Object(); // using contructor function

// Literal type object
/* 
 * Syntax:  var/let/const <objectIdentifier> = { key1: value1, key2: value2, key3: value3 };
 * To access object properties we have to use dot(.) operator
 * objectIdentifier.objjProp
*/

const person = { 
    id: 1024,
    firstName: "John",
    email: "john@gmail.com"
};

/* person = {}; // we can not reassign to variables declared by const keyword
person = []; // we can not reassign to variables declared by const keyword
person.id = 1025;//id will become 1025
person = {
    email: "john@gmail.com",
    firstName: "John"
}; */

/* // Access properties value
console.log('Person ID', person.id); // 1024
console.log('Person First NAme', person.firstName); // John
console.log('Person Email', person.email);

// To set properties value
person.firstName = "Smith";
person.email = "smith@gmail.com";
console.log('Person First NAme', person.firstName); // Smith
console.log('Person email', person.email); // smith@gmail.com

//To add or append data into object
person.phone = "7867564767";

delete person.firstName;

console.log('Person', person); // 1024
console.log('Person phone', person.phone); // smith@gmail.com

var message = {
    showMessage: function(val){
        console.log('message', val);
    }
};

//function call
message.showMessage('Object function called');

console.log('message', message);

var personDetails = {
    firstName: "James",
    lastName: "Bond",
    age: 35,
    getFullName: function(){
        return this.firstName+ ' ' +this.lastName
    }
};

console.log('this', this);

// console.log('personDetails', personDetails);

let fullName = personDetails.getFullName();
console.log('fullName', fullName); */

var copyObj = {};

var personDetails = {
    firstName: "James",
    lastName: "Bond",
    age: 35,
    email: "james@gmail.com",
    getFullName: function(){
        return this.firstName+ ' ' +this.lastName
    }
};

// Object.hasOwnProperty('key') is used to check object property is available or not
if(personDetails.hasOwnProperty('email')){
    console.log('Email', personDetails.email);// undefined
}

// making copy of an object
// If you do not want to effect original object values
// Then we have to use Object.assgin({}, objectVar) method to make copy of an object
copyObj = Object.assign({}, personDetails);

copyObj.firstName = "Ashok";
copyObj.lastName = "Reddy";

/* 
   copyObj = {
    firstName: "Ashok",
    lastName: "Reddy",
    age: 35,
    email: "james@gmail.com",
    getFullName: function(){
        return this.firstName+ ' ' +this.lastName
    }
};
*/

console.log('copyObj', copyObj);
console.log('personDetails', personDetails);

/* console.log('Email', personDetails.firstName);
console.log('Email', personDetails.lastName); */

// Object to call by reference

// Function declaration and defination
// Methos will take arguement as a object
function callByReference(obj) {
    obj.firstName = "Nilesh";
}

// Function call
callByReference(copyObj);

console.log('copyObj First Name', copyObj); // 


// Object cteation using Object Constructor function
// Syntax: var varName = new Object();

var obj = new Object();
console.log('obj', obj);

// Add properties and its value to object
obj['firstName'] = "Akash";
obj['lastName'] = "Varakala";
obj['email'] = "akash@gmail.com";
obj['displayName'] = function(){
   console.log(this.firstName);
   console.log(this.lastName);
};

console.log('obj', obj);
// Function call of an object
console.log('obj email', obj.email);
obj.displayName();