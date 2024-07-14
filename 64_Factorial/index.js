const prompt = require('prompt-sync')({ sigint: true });
console.log("\n");
let num = parseInt(prompt("Enter any Number : "))

// By Loop Factorial Count 
function fact(number) {
    let f = 1;
    if (number == 0)
        return f;
    for (let i = 1; i <= number; i++) {
        f = f * i;
    }
    return f;
}

console.log("\nBy Loop Factorial of", num, "is", fact(num));

// By Reduce function
function factReduce(numbu) {
    let arr = Array.from(Array(numbu + 1).keys())
    let ans = arr.slice(1).reduce((first, second) => first * second)
    return ans;
}

console.log("\nBy Reduce Function Factorial of", num, "is", factReduce(num));
