/* Introduction */

/*
camelCase //Praxis in JS functions, vars
PascalCase //Classes
snake_case //Often not used
*/

// Hello World!
console.log('Hello, World!');

//Variables
let greeting = 'Hello from a variable';
console.log(greeting);
greeting = 3;
console.log(greeting);

greeting = 'Hello'
const PI = 3.1415926;

//Printing
//Concatenation 
console.log(greeting + ', PI is: ' + PI);

//Interpolatin and templating literals
console.log(`${greeting}, PI is: ${PI}`);

//Be careful with floats
console.log(0.1 + 0.2);

//Equality
console.log(1 == 1); //true
console.log(1 == '1'); //true
console.log(1 === '1'); //false

//Loose typing and conversion
let myNumber = 5;
console.log(myNumber);
console.log(typeof myNumber);
console.log(myNumber + 5); //10

myNumber = '5';
console.log(myNumber);
console.log(typeof myNumber);
console.log(myNumber + 5); //'55'

/*Control flows*/
let myAge = 23;

if(myAge >= 40) {
    console.log('You are getting old');
} else {
    console.log('You\'re still young');
}

//Ternary operation
myAge === 23 ? console.log('23 years old') : console.log('Not 23 years old');

//boolean statement ? true : false

//Loops, arrays and objects
//for
for (let i = 0; i < 5; i++) {
    console.log(i);
}

let people = ['Jason', 'Freddy', 'Chucky', 'Michael'];

//Log entire array
console.log(people);

//Length of array
console.log(people.length);

//Get the first person
console.log(people[0]);

//Get the last person
console.log(people[people.length - 1]);

//Get slice of array
let newPeople = people.slice(0, 2); //first 2

console.log(newPeople);

//Add to start of array
people.unshift('Walter');

//Add to end of array
people.push('Jesse');

console.log(people);

//Remove from start of array
people.shift();

//Romove from end of array
people.pop();

console.log(people);

//Loop arrays
for(let person of people) {
    console.log(person);
}

//Older but still works
for(let i = 0; i < people.length; i++) {
    console.log(people[i]);
}

//Lamda loop
people.forEach(x => console.log(x));

//Objects
let nicholas = {
    firstName: 'Nicholas',
    lastName: 'Chill',
    age: 23,
    hobby: 'music'
};

console.log(nicholas);

console.log(`First name: ${nicholas.firstName}`);
let nicholasStr = `${nicholas.firstName} ${nicholas.lastName}, age: ${nicholas.age}`;
console.log(nicholasStr);