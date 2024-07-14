// Tutorial of Array

// Array Declaration
const fruits = ["banana", "apple", "mango"];
const a = [7, "Sudhanshu", true]; // In javascript array there can be different types of value is allowed

// Array indexing
let arr = [1, 2, 4, 5, 7]
//  Index  0 1 2 3 4

// Type of array and there length
console.log(arr, typeof arr);
console.log("Length of array : ", arr.length);

arr[0] = 4251; // Array can change their value at particular index
// Here, arrays are mutable( changeable) and other side string are immutable ( not changeable )

// hence , arrays are mutability property in javascript and string doesn't have mutability property 

console.log(arr[0]);
console.log(arr[1]);
console.log(arr[2]);
console.log(arr[3]);
console.log(arr[4]);

// Some important inbuilt functions for array 
console.log(arr.toString()); // This converts the array into string 

console.log(arr.join(" and ")); // Arguments in join function are inserted in array at comma places

console.log(arr.pop()); // This pop function is used to remove last element of an array and this function return that element
console.log(arr); // Now , one last element is not there in array

console.log(arr.push("Sudhanshu")); // This push function is used to add element at last of array and this function returns the length of an array
console.log(arr); // Now , one last element is added i.e. "Sudhanshu"

console.log(arr.shift()); // This shift function is used to remove first element of an array and this function return that element
console.log(arr); // Now , one first element is not there in array

console.log(arr.unshift("Barnwal")); // This unshift function is used to add element at first of an array and this function returns the length of an array
console.log(arr); // Now , one first element is added i.e. "Barnwal"

// This can be asked in INTERVIEW may be

delete arr[4] // This will going to delete an element of an array but not able to delete memory which is already allocated to that element. So, that we can assign with new value also in future 

console.log(arr); // This empty item which element is deleted previously
console.log(arr[4]);

arr[4] = "Deepak"
console.log(arr);

// Concatenation of an array
let a1 = [1, 2, 3]
let a2 = [4, 5, 6]
let a3 = [8, 4, 25]

// This can be asked in INTERVIEW may be

let arrConcat = a1.concat(a2, a3)  // This will not going to change the array a1, a2 and a3
console.log(arrConcat);

// Splice array function
arr = [13, 536, 25, 37, 25, 64]
console.log(arr);

console.log(arr.splice(1, 3)); // This slice function is to remove from 1 to 3 index element and return that element. So, because of that original array show changes

console.log("Changed array : ", arr)

arr = [13, 536, 25, 37, 25, 64]
console.log(arr.splice(1, 3, 36, 26, 12, 461, 14)); // This slice function is to remove from 1 to 3 index element and return that element. So, because of that original array show changes and after that two index whatever value will be there that all element will be inserted in between 1 and 3 index 

console.log("Changed array : ", arr)

// Slice function which return the some part of an array by giving argument index
let num = [25, 47, 1, 56, 123]
console.log(num.slice(2)); // This will return elements form index 2 to end index
console.log(num.slice(2, 4)); // This will return elements form index 2 to 4-1 index

// Loops for array ( Very important )
let number = [25, 467, 1, 67, 213, 67, 23]

// for (let i = 0; i < number.length; i++) {
//     const element = number[i];
//     console.log(element);
// }

// For each loop
number.forEach((value, index, array) => {
    console.log(value, index, array); // This will going to me each and every element index and array. This value, index, array follow standard line by line
})

// For in loop
let obj = {
    a: 1,
    b: 2,
    c: 3
}
for (const key in obj) {
    if (Object.hasOwnProperty.call(obj, key)) {
        const element = obj[key];
        console.log(key, " : ", element);
    }
}

// For of loop

number = [25, 467, 1, 67, 213, 67, 23]
for (const value of number) {
    console.log(value);
}


