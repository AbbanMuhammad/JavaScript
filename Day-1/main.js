//Variables:

/*
A variable is a box where JavaScript used yo store its value.*/

//Different b/w let, const, var:
/*
const:
✔️ is used for value that doesn't change.
✔️ it's the best default choice.

Examples:
*/
const birthYear = 1989;
const country = "Nigeria";

/*
let:
✔️ It's used when the value will change.
✔️ Example:
*/

let score = 0;
score = 5;     // ✔️ OK

/*
var(Old & avoid it):
✔️ cause scope problem 
✔️ modern JavaScript rarely used var
*/

//Real-world Examples
const PI = 3.14;      // Constant value
let userAge = 17;     // Will change later
let cartTotal = 0;    // Increases when user adds 

//DATA TYPES:
/*
✔️ Number: All numbers (decimal and integer) are the same type.
*/

let age = 36;
let price = 25.99;


/*
✔️ STRING: text. It's always inside quotes.*/

let name = "Sani";
let school = 'Falgore Academy';

/*
✔️ Boolean: true or false.*/

let isStudent = true;
let hasPaidFees = false;

/*
✔️ undefined: a variable that is declared but not given a value.*/
let friend;
console.log(friend);       // undefined

/*
✔️ null: intentional empty value.*/
let middleName = null;

/*
✔️ bigint(large number): used for number bigger than 2⁵.*/

let big = 123456789123456789n;

/*
✔️ symbol(advanced): Creates a unique value. Used mostly in advanced JavaScript or libraries.
*/

/*3️⃣ TEMPLATE LITERALS (Backticks)

Template literals use   instead of quotes.

They allow:

✔️ variable insertion
✔️ multi-line strings
✔️ easy formatting

Example:
*/
let x = 5;
let y = 10;
console.log(`The sum of ${x} and ${y} is ${x + y}`);

//Multi-line example:

console.log(`
Hello!
This is line 2
This is line 3
`);

/*4️⃣ typeof OPERATOR

typeof tells you the type of a value.

Examples:
*/
typeof 10           // "number"
typeof "Hello"      // "string"
typeof true         // "boolean"
typeof undefined    // "undefined"
typeof null         // "object"  ← known JavaScript bug
typeof {}           // "object"
typeof []           // "object"
typeof function(){} // "function"


/*5️⃣ SWAPPING VALUES
✔️ Correct modern method (array destructuring):
*/
x = 5;
y = 10;

[x, y] = [y, x];

console.log(x); // 10
console.log(y); // 5

/*Why it works:

[y, x] creates an array of swapped values.

[x, y] = [...] reassigns them in one step.*/


/*6️⃣ IF / ELSE STATEMENTS

IF = check a condition
ELSE = what to do if condition is false

Example:*/

if (age < 18) {
  console.log("Minor");
} else {
  console.log("Adult");
}

//More examples:

score = 75;

if (score >= 70) {
  console.log("A");
} else if (score >= 60) {
  console.log("B");
} else {
  console.log("C or below");
}

age = 36;
score = 23;

console.log(age);

let a = 56;
let b = 45;

let c = a + b;
let d = a - b;
let e = 2 * c;

console.log(c);
console.log(d);
console.log(e);
console.log(2 * c);

//Challenge 1
let n = 57;
let m = 12;
let o = n + m;

console.log(`The sum of ${n} and ${m} is ${o}`);

//Challenge 2:
name = "Sani Ismail ";
let dateOfBirth = 1989;
isStudent = true;
school;
friend = null;

console.log(typeof(name));
console.log(typeof(dateOfBirth));
console.log(typeof(isStudent));
console.log(typeof(school));
console.log(typeof(friend));
//Challenge 3:
 p = 5;
 q = 10;

[p,q] = [q,p];

console.log(p);
console.log(q);

//Challenge 4:

if (age < 18) {
  console.log("Minor");
} else {
  console.log("Adult");
}

