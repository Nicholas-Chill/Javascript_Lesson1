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

//Objects Key: Value
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

let nicholasAdvanced = {
    firstName: 'Nicholas',
    lastName: 'Chill',
    age: 23,
    hobbies: ['music', 'bowling', 'disc golf', 'basketball', 'games']
};

console.log(nicholasAdvanced); //Object
nicholasJSON = JSON.stringify(nicholasAdvanced); //Object to JSON
console.log(nicholasJSON);
console.log(JSON.parse(nicholasJSON)); //Back to an object

//Loop over object
for(let propertyName in nicholasAdvanced) {
    let propertyValue = nicholasAdvanced[propertyName];
    console.log(propertyValue);
}

//Loop through object and array inside of an object
for(let propertyName in nicholasAdvanced) {
    let propertyValue = nicholasAdvanced[propertyName];
    if(Array.isArray(propertyValue) === true) {
        for(let hobby of propertyValue) {
            console.log("Hobby: " + hobby);
        }
    } else {
        console.log(propertyName + ": " + propertyValue);
    }
}

//Connection to HTML
//Ask JS to create a new element
let myDiv = document.createElement('div');
myDiv.innerHTML = `
<h1>Hello from JS!</h1>
<p>This text is from JavaScript, my age is ${nicholas.age}</p>
`;

//Grab the body tag
let body = document.querySelector('body');

//Add the div to the HTML
body.append(myDiv);

//Another way to add data
let myBands = [
    {
        name: 'Death',
        genre: 'Death Metal'
    },
    {
        name: 'Rush',
        genre: 'Prog Rock'
    }
];

//Grab the bands div
let bandsDiv = document.querySelector('#bands');
for(let band of myBands) {
    bandsDiv.innerHTML += `
        <div class="band">
            <h2>${band.name}</h2>
            <p>Genre: ${band.genre}</p>
        </div>
    `;
}

//Functions
function sayHello() {
    console.log('Hello');
}

const sayHello2 = () => {
    console.log('Hello 2');
}

sayHello();
sayHello2();

//Diffewrent ways of declaring the same function
function add(a, b) {
    return a + b;
}

const add2 = (a, b) => {
    return a + b;
}

const add3 = function(a, b) {
    return a + b;
}

//Arrow function with implicit return
const add4 = (a, b) => a + b;

//Arrow function with implicit return and one parameter
const add5 = a => a + 5;

console.log(add(1, 2));
console.log(add2(1, 2));
console.log(add3(1, 2));
console.log(add4(1, 2));
console.log(add5(1));

//Classes
class Person {
    constructor(name, age, hobby) {
        this.name = name;
        this.age = age;
        this.hobby = hobby;
    } 

    greetings() {
        console.log(`Hi, my name is ${this.name} and I am ${this.age} years old`);
        console.log('I enjoy ' + this.hobby);
    }
}

const nicholasClass = new Person('Nicholas', 23, 'bowling');
nicholasClass.greetings();
console.log(nicholasClass.hobby);