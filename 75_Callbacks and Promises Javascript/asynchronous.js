// What is asynchronous Javascript?

//  Asynchronicity means that if JavaScript has to wait for an operation to complete, it will execute the rest of the code while waiting. 
// Note that JavaScript is single-threaded. This means that it carries out asynchronous operations via the callback queue and event loop.

// Asynchronous actions are the actions that we initiate now and finish later on. for e.g. setTimeout , setInterval , callback , promises , async/await ,etc 

// Synchronous actions are the actions that initiate now and finish one by one execution

console.log("\n");

console.log("Sudhanshu is a good boy");
console.log("I am From Bharat");

setTimeout(() => {
    console.log("I have taken 3 sec to run this program execution");
}, 3000);

console.log("Tata bye bye");


