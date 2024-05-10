// Rules for writing variables
// 1) Letters , digits , underscore & $ sign allowed
// 2) Variables must begin with $ , letters and _ ( underscore )
// 3) Javascript reserved words cannot be used as a variable name
// 4) Javascript variables are case sensitive

// variable can be declared and define by var , let and const 
// This is having their own different role and different speciality in terms of updation and declaration

// 1) var is globally scoped while let and const are block scoped
// 2) var can be updated and re-declared within its scope
// 3) let can be updated but not be redeclared
// 4) const can neither be updated nor be re-declared or can't change the value of const variable

console.log("Hey this is tutorial 55")

var a = 5;
let b = 3;
let names = "Sudhanshu"

{
    // var a = 894; globally scope which can change the value of globally scope by being in local scope
    let a = 894 // blocked scope
    console.log(a);
}

console.log(a)

console.log( names )

console.log( a + b + 7)

console.log( typeof a , typeof b , typeof names )


// There are 7 Primitive data types are some set of data types in javascript i.e.
// BigInt , boolean , NULL , Number , string , symbol , undefined

let isTrue = true // boolean
let val = null; // NULL
let num = 4.53 // Number
let myName = " Sudhanshu barnwal " // string
let value = undefined  // undefined 

console.log( isTrue , val , num , myName , value );
console.log( typeof isTrue , typeof val , typeof num , typeof myName , typeof value );

// why type of null is objcet ?

/* The typeof operator returns "object" for objects, arrays, and null. It is because of the legacy issue of the first implementation of JavaScript. Back then, all values in JavaScript were 32 bits, and the final one to three bits were used for the type tag. For example, the type tag of 1 is a one, indicating that it is an integer.

However, there's one special case, null. Null is the absence of other values and is stored as the null pointer address, which is all zeros. And the type tag of an object is zero zero zero. Because of that, the typeof operator returns "object" for null.

This is considered a bug in JavaScript, but it has not been fixed for backward compatibility reasons. To check if a value is null, you can use the strict equality operator (===) instead of the typeof operator.
 */

// Object is a Non-primitive data types in javascript

let obj = {
    "names" : "Sudhanshu",
    roll_no : 5 ,
    mobileNo : 9004877026,
    isHandsome : false 
}

console.log(obj) // Accessing all objects key : value pair of object
console.log("")
console.log(obj.mobileNo) // Accessing one value from all of its key of object
console.log("")

obj.surname = "Barnwal" // Inserting some new key:value pair in object
obj.isHandsome = true // Updating the value

console.log(obj)

// Javascript linter is used for examine the code and overcoming from bugs before its execution
