// const prompt = require('prompt-sync')({ sigint: true });

console.log('\n');

let a = prompt("Enter first number : ")

let b = prompt("Enter second number : ")

if (isNaN(a) || isNaN(b)) {
    throw TypeError("You didn't Type integer value") // We can throw error by our own
}

a = parseInt(a);
b = parseInt(b);

function main() {
    try {
        console.log('Sum : ', x * (a + b));
        return true;

    } catch (error) {
        console.log('Error aa gaya bhai');
        console.log("Error Name :", error.name);
        console.log("Error message :", error.message);
        console.log("Error stack :", error.stack);
        return false;
    } 
    finally{
        console.log('Files are being closed and db connection is being closed ');
        // In JavaScript, the finally block is used in combination with the try and catch blocks to handle exception handling and ensure that a certain block of code executes regardless of whether there was an exception or not. 

        // Whatever code is written finally block that code will be executed if try or catch block return its function then also finally block of code gets executed this is the speciality of finally block of code which makes major difference for writing finally keyword for execution of program
    }
}

console.log("Sum :", a + b);
main()

// finally clause always run program