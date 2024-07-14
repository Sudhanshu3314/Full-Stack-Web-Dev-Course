console.log("This is string tutorial");
let myName = "Sudhanshu";

for (let i = 0; i < myName.length; i++) {
    console.log(myName[i]);
}

console.log(myName.length); // Length of string

let friend = "Krishnn"

console.log("His name is " + myName + " his friend name is " + friend );

console.log(`His name is '${myName}' and his friend name is "${friend}"`);
// This using backtick ` ` insert variables directly in template literal is termed as interpolation. We can use " " double quotes and ' ' single quotes in tempelate literal so that we can print both the quotes

console.log('Sudhanshu\"s Best friend is Krishn\'n');  // Escape sequence character is \

console.log("\n");
console.log(myName.toUpperCase()); // This convert the all letters into capital letter
console.log(myName.toLowerCase()); // This convert the all letters into small letter

console.log(myName.slice(2,7));  
// This slice function print letters from index 2 to 7-1 i.e. 2 to 6
console.log(myName.slice(4));  
// This slice function print letters from index 4 to myName.length - 1 i.e. 4 to 8

console.log(myName.replace("hu", "hree")); // This replace the string with u to ree and if there is two occurence which is same letters so first occurence will replace

let mySurname = "Barnwal";
console.log(myName.concat(" " , mySurname , " Deepak " , " Barnwal "));

// myName[0] = 'k'; String are immutable( can't changeable ) in javascript
console.log(myName);
