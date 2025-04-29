// variable practice
const PI = 3.14;
let radius = 1;

let area = 0;

area = radius * radius * PI;

console.log(area);

const two = '2';
const one = 1;

let result = one * two;
console.log(result);

// scope
let global = "I'm global";
let block = "I'm block"

function exampleFunction() {
    let block = "I am block";
    console.log(block);
    console.log(global);
}

console.log(block);
console.log(global);
exampleFunction();

