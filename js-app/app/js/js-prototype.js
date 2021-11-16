// Prototype in JS

/* 
 * Prototype are the machanism by whitch javascript objects inherit features from one another
 * Generrally in the JS object we can attach/set properties directly 
*/

console.log('this', this);

var obj = {
    eats: true,
    showColor: function(){
        console.log(this.color)
    }
} 

function Animal(){
    this.color = 'Red';
}

Animal.prototype = obj;
var animal = new Animal();
animal.showColor();

/* console.log('animal color', animal.color);
console.log('animal eats', animal.eats); */

function Student() {
    this.name = 'John';
    this.gender = 'Male';
}

Student.prototype.age = 20;
var stuObj1 = new Student();

console.log('stuObj1.age', stuObj1.age);

var stuObj2 = new Student();

console.log('stuObj2.age', stuObj2.age);


//Changing the properties using prototype

function Person(first, last, age, gender, hobby){
    this.name = {
        fisrt: first,
        last: last,
    };

    this.age = age;
    this.gender = gender;
    this.hobby = hobby;
}

Person.prototype.farewell = function(){
    alert(this.name.fisrt + ' has left the building, bye for now!');
}

Person.prototype.email = 'tammi@gmail.com';
var person = new Person('Tammi', 'Smith', 32, 'nuetral', ['music', 'skiing', 'kickboxing']);
// console.log('person email', person.email);

Person.prototype = {email : 'smith@gmail.com'};
var person_1 = new Person('Tammi', 'Smith', 32, 'nuetral', ['music', 'skiing', 'kickboxing']);

delete person.email;// so the protypes also provide abstraction that do not allow to
// destroy property
console.log('person email', person.email);//tammi@gmail.com 
console.log('person_1.email', person_1.email);
console.log('person_1 email', person_1.email);//smith@gmail.com
