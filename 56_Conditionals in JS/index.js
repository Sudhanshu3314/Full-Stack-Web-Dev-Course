const prompt = require("prompt-sync")({ sigint: true });

let ageNumber = parseInt(prompt("whats your age ? ===> "));
// console.log(typeof age)
if ( ageNumber < 0 ) {
    console.log("This is an Invalid Age ")
}
else if ( ageNumber > 0 && ageNumber < 10 ) {
    console.log("You are a SMALL kid")
}
else if (ageNumber >= 10 && ageNumber <= 18 ){
    console.log("You are a Growing Kid")
}
else if( ageNumber > 18 && ageNumber <= 50 )
{
    console.log("You are Adult")
}
else{
    console.log("Now , You are getting Old Human ")
}

// Chapter 2 
// Problem no 1 
let age = parseInt(prompt("What's Your age ? "))

/*  if (age > 10 && age < 20) {
    console.log(" This age is in between 10 and 20")
} else {
    console.log(" This age is NOT in between 10 and 20")
}  */

// Problem 2
/*
switch (age) {
    case 12:
        console.log(" Your Age is 12 ")
        break;
    case 13:
        console.log(" Your Age is 13 ")
        break;
    case 14:
        console.log(" Your Age is 14 ")
        break;
    case 15:
        console.log(" Your Age is 15 ")
        break;

    default:
        console.log(" Your age is not Special")
        break;
}   */

let num = parseInt(prompt("Enter any Number :- "))
// Problem 3 
/*
if (num % 2 == 0 && num % 3 == 0) {
    console.log(" This number is divisible by 2 and 3 ")
} else {
    console.log(" This number is NOT divisible by 2 and 3 ")
}  */

// Problem 4 

if (num % 2 == 0 || num % 3 == 0) {
    console.log(" This number is divisible by 2 or 3 ")
} else {
    console.log(" This number is NOT divisible by 2 or 3 ")
}  





