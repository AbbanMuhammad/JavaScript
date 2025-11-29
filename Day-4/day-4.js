//Challenge 1:
/*
Create two numbers and log:
their sum
their difference
their product
their quotient
their remainder
*/
let x = 60;
let y = 45;

console.log(x+y);
console.log(x-y);
console.log(x*y);
console.log(x/y);
console.log(x%y);

//Challenge 2:
/*
Use the Math object:
1. Round 3.67
2. Round DOWN 9.99
3. Round UP 2.01
4. Find the maximum of: 34, 12, 89, 3
5. Find the square root of 144*/
console.log(Math.round(3.67));
console.log(Math.floor(9.99));
console.log(Math.ceil(2.01));
console.log(Math.max(34, 12, 89, 3));
console.log(Math.sqrt(144));
console.log(Math.pow(2,3));
//Challenge 3:
/*
Generate:
a random number between 0 and 1
a random whole number between 0 and 10
a random whole number between 1 and 6 (like a dice)
*/
console.log(Math.random());                     // 0–1
console.log(Math.floor(Math.random() * 11));     // 0–10
console.log(Math.floor(Math.random() * 6) + 1);  // 1–6

//Challenge 4:
/*;
Write a function:
function square(n)
It should return the square of n.
*/
const square = (n) => n ** 2;
// function square(n){
//   return n**2;
// }
console.log(square(100));
//Challenge5:
/*
Create a function that returns a random dice number (1 to 6).
*/
const randomDiceNumber = () => Math.floor(Math.random() * 6) + 1;
console.log(randomDiceNumber());
//Challenge 1:
let a = 150
let b = 27
console.log(a+b);
console.log(a-b);
console.log(a*b);
console.log(a/b);
console.log(a%b);
console.log(a**b);
//Challenge 2:
let π =3.142
console.log(Math.round(5.555));
console.log((π/180)*75);
console.log(Math.floor(Math.random() * 100) + 50)
console.log(Math.max(23,99,-4,18));
console.log(Math.pow(-349,2));
