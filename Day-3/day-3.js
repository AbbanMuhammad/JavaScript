//challenge 1:
/*
Create a variable fullName and store your complete name.
Log:

length of your name

your name in uppercase

your name in lowercase
*/
let fullName = "Sani Ismail"
console.log(fullName.length);
console.log(fullName.toUpperCase());
console.log(fullName.toLowerCase());

//Challenge 2:
/*
Create:

let sentence = "JavaScript is powerful and fun";

Log:

Does it contain the word "fun"?

The index of "powerful"

The first 10 characters using .slice()
*/
let sentence = "JavaScript is powerful and fun";
console.log(sentence.includes("fun"));
console.log(sentence.indexOf("powerful"));
console.log(sentence.slice(0,10));

//Challenge 3:
/*
Using template literals, print this message:

My name is ______ and I love learning JavaScript!

(Fill your real name)
*/
console.log(`My name is ${fullName} and I love learning JavaScript!`);

//Challenge 4:
/*
Remove spaces from this text:

let messy = "   Learning JS step by step   ";

Output should be:
"Learning JS step by step"
*/
let messy = "   Learning JS step by step   ";
console.log(messy.trim());
