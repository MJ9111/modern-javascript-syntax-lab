//ex1

const array1 = [13, 87, 2, 89, 12, 4, 90, 63];

const map1 = array1.map((x) => x * 2); 


console.log(map1)

//ex2

const pizzaToppings = ['Pineapple', 'Olives', 'Anchovies'];

const [firstVeg, secondVeg] = pizzaToppings;

console.log(firstVeg);
console.log(secondVeg);

// //ex3

const car  = {
   make: 'audi',
   model: 'q5',
   year: 2020,
 };
  
  // Object destructuring:
 const { make, model, year } = car;
  
 console.log(make); 
 console.log(model);
 console.log(year); 
  

// //ex4



const pizzaToppingss = ['Pineapple', 'Olives', 'Anchovies'];

// const duplicatArray = ['']
const clone = [...pizzaToppingss];

console.log(clone);

// { foo: 'Hello', bar: 100 }

//ex5

// Duplicate the following object and spread its values into a new variable `myCar`.

// 
const caro = {
  make: 'Audi',
  model: 'q5',
};

const selectedCaro = 'make';
const selectedCaroCount = caro[selectedCaro];

console.log(selectedCaroCount);
// Change the `model` property of `myCar` to 'q7'. Log both objects.

// ex6
// Your code here
// Create an object named userProfile. 
// Define a variable named propertyName and assign a string to it (like a username, age, or email). 
// Use propertyName as a dynamic key in userProfile, assigning a relevant value.
const userProfile = {};
const propertyName = 'username';
const propertyValue = 'john_doe';

userProfile[propertyName] = propertyValue;
// Your code here

console.log(userProfile);

//ex9
// Convert the following `if...else` statement in to a ternary:
let pizzaa = 'tasty';

if (pizzaa === 'tasty') {
  console.log('yum');
} else {
  console.log('yuck');
}

let pizza = 'tasty';

console.log(pizza === 'tasty' ? 'yum' : 'yuck');
// Remove the extra closing curly brace

// Your code here
const LANG = localLangConfig || 'en';