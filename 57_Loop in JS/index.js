let a = 1;
for (let i = 0; i < 100; i++) {
    console.log(a + i);
}

console.log("\n")

const prompt = require('prompt-sync')({ sigint: true });

let num = prompt("Enter any Number : ")

for (let i = 1; i <= 10; i++) {
    if( num == "" )
        break
    console.log(num, 'x', i, '=', num * i)
}

console.log("\n")

let obj = {
    naam : "Sudhanshu",
    rollNo : "05",
    isHandsome : true,
    Passion : "Army"
}

// For in loop is used for access of key which is in object
// for (const key in obj) {
//     let value = obj[key];
//     console.log(key , ':' , value);
// }

// for...of loop is used to iterate over iterable objects such as arrays, strings, maps, sets, etc.

// for (const character of "Sudhanshu") { 
//     console.log(character);
// }

// While LOOP
let i = 0; 
while( i < 6 ){
    console.log(i)
    i++
}


// Do while loop = This execute atleast one time if condition is false or not

i = 0;
do{
    i++;
    console.log(i);
}while( i < 0 );