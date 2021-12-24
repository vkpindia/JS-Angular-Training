
/* 
 * In TS OOP, we do not use let, var and const keywords to declare class level
global variables, we use it for local, function or block level scope variables

 * We use access specifiers public, private and protected  for creating class level 
variables and for functions declarations, we do not use function keyword.

* We use 'new' keyword to creating the object of a class and we create the object 
outside of the class
  Syntax:
  
  var obj = new class_name();
  
*/

import { UserType } from "./userType";

interface UserI {
    public printUser(): void;
}

class Demo implements UserI{

public name: string;
public userObj: any = {
    id: 1024,
    name: 'Ashok',
    city: 'Hyderabad'
};

public userList: UserType[] = [
    {
        id: 1024,
        name: 'Ashok',
        city: 'Hyderabad',
        postalCode: '495001'
    },
    {
        id: 1025,
        name: 'Scott',
        city: 'Pune'
    },
    {
        id: 1026,
        name: 'Smith',
        city: 'Bangalore',
        postalCode: '231211'
    }
];

 constructor(name){
    this.name = name
 }   

public printName(): void {
    console.log('Name:', this.name);
}

public printUser(): void {
    this.userList.forEach((user, index)=>{
        console.log('User', user);
    });
}

}

var obj = new Demo('Ashok');

obj.printName();// Name: Ashok
obj.printUser();

/* 
  * map()
  * filter()
  * reduce()
  * some()
  * every()
  * forEach()
*/