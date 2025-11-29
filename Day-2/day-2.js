//Challenge 1:
/*
Write a program that:

Stores two numbers

Checks if the first is greater than the second

Logs a message:

“First is greater”

or “Second is greater”

or “They are equal”

*/
let a = 34;
let b = 24;

if (a > b) {
    console.log("First is greater");
} else if (a < b) {
    console.log("Second is greater");
} else {
    console.log("They are equal");
}

//Challenge 2:
/*
Write a script that checks:

If a variable age is exactly equal (value + type) to "18"
*/
let age = "18";
if (age === 18) {
    console.log("Age is 18 years old.");
}

//Challenge 3:
/*
Create 2 boolean values:

hasMoney

isRaining


If:

hasMoney is true AND

isRaining is false


Log “Going out”, otherwise log “Staying home”.
*/

let hasMoney = true
let isRaining = false

if(hasMoney ===true && isRaining === false){
  console.log("Going Out");
}else{
  console.log("Staying home");
}

/*
Challenge 4:
Write a function:

function multiply(a, b)

It should return the product of a and b.

Then call it with any values you choose.
*/

function multiply(x,y){
  return x * y;
}
console.log(multiply(2,5));


//Challenge 5:
const multiplication = (n,m) => n * m;
console.log(multiplication(34,23));