/* Creating a Faulty calculator it means when we enter + then it must be operating the numbers by - substraction. In short calculation must be done by wrong operator 

+ ----> -
* ----> +
- ----> /
/ ----> **

It performs wrong Operation 20% of times 

*/

const prompt = require('prompt-sync')({ sigint: true });

while (1) {
    let random = Math.random();

    console.log(random);

    let a = prompt("Enter first number : ");
    let b = prompt("Enter second number : ");
    let operator = prompt("Enter operator : ");

    if( operator == 0 ){
        break;
    }

    let objOperator = {
        '+': '-',
        '*': '+',
        '-': '/',
        '/': "**"
    }

    if (random > 0.2) {
        // Perform correct calculation
        console.log(`Result : ${eval(`${a} ${operator} ${b}`)}`);
    }
    else {
        operator = objOperator[operator];
        console.log(`Result : ${eval(`${a} ${operator} ${b}`)}`);
    }
    console.log("\n");
}


