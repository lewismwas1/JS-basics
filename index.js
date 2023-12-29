// This is my first javascript code!
console.log('Hello World'); 
let name = 'Lewis';
console.log(name);

let firstName = 'Ann';
let lastName = 'Nyawira';
console.log(firstName);
console.log(lastName);

let interestRate = 0.3;
//if need to assign use const
//if need to reassign use let
interestRate = 1;
console.log(interestRate);

//Primitive or value types
let isApproved = true; // boolean value
let herName = 'Lewis'; //string value
let age = 23;
console.log(age);
console.log(herName);
console.log(isApproved);

//Object in js
let car = {
    model: 'BMW',
    year: '2023',
    carName: 'M5Competition'
};

//car.name = 'Mercedes';
console.log(car);



//Arrays
let selectedItems = ['sugar','chocolate'];
selectedItems[2] = 'biscuits'
console.log(selectedItems);


//funtions
function greet(hisName,lName,age){
    console.log('Hello ' + hisName +' '+ lName + ' '+ age);
}
greet('Lewis','Mwangi',23);
greet('Ruth','Wanjiku',14);
greet('Ann','Nyawira',25);

//calculate using functions

function rectangle(length,width){
return length * width;
}
console.log(rectangle(20,40));

function triangle(base,height){
    return 0.5 * base * height;
}
console.log(('The area is  ') + triangle(4,3) + 'cm^2');