1) What is the difference between var, let, and const?

var :
It is function-scoped , it can acessable for any where into function scop,
and it is redeclareable, there hosting area is any where means var can declare to the one place then we can call it to the upper place there provided output is  output is undefine.

let :
It is block-scoped means dose not work outer side the block, redeclareable not possible, but declare is possible into the same block, hosting is possible but there habe temporal dead zone so, let declare section to the upper section to cal that the function output then output showed the error.

const :
It is block-scoped and do not redeclareable and assingable , primitive values like number and string is always constant, but object and array there value is changing possible, 


2) What is the difference between map(), forEach(), and filter()?

map :
work on the each element and return the new array, there output is new array,
declareation example: let doubled = nums.map(n => n * 2);

filter :
if condition is true then return the group of matching element into a array
declareation example: let evens = nums.filter(n => n % 2 === 0);

forEach  :
 working process like - looping on the each element but do not return the value it is printing the looped value, there returnt value is undefined,
 declareation example: nums.forEach(n => console.log(n * 2));


 3) What are arrow functions in ES6?
 It is sorted syntext function of ES6 , using for shorted-code and clean code structured, do not binding there owun (this) code, it collect/useing there parent-scope (this)
 declareation example: const addArrow = (a, b) => a + b;


 4) How does destructuring assignment work in ES6?
 Destructuring it can do distroyed the array/object values and saparete it then assing it into the another variable.

 declareation example:   
    
    * array destructuring -
    const numbers = [10, 20, 30];
    const [a, b, c] = numbers;

    * object destructuring -
    const person = {name: 'Alamin' , age: 20};
    const {name, age} =  person; 


5) Explain template literals in ES6. How are they different from string concatenation?
Template literals -  means using the backtick `` ,  advantage is writing possible multiple line string, and using this &{} for declare the variable or exprassion.

declareation example: let msg = `Hello ${name}, welcome!`;










