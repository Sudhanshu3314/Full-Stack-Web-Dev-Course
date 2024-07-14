// Map Function
// Creates a new array by performing new operation on each array element

let num = [2, 7, 113, 47, 13, 67]

let newArr = []
// for squaring elements we can do like this
// for (let i = 0; i < num.length; i++) {
//     const element = num[i];
//     newArr.push(element**2)
// }

// console.log(newArr);

// We can do squaring of elements in some few steps by using map function 

newArr = num.map((element, index, array) => {
    return element ** 2;
})

console.log(newArr);

// Filter function
// Filter an array with values that passes a test creates a new array
num = [2, 7, 113, 47, 13, 67]

// Arrow function for greater than 40
const greaterThanForty = (ele) => {
    if (ele > 40) {
        return true
    }
    return false
}

console.log(num.filter(greaterThanForty));

// Reduce function
// Reduce an array to a single value

num = [1, 2, 3, 4, 5, 6, 7, 8]

let red = (first, second) => {
    return first + second;
}

console.log(num.reduce(red));

// Array.from() = This is used to create an any object into an array
console.log(Array.from("SudhanshuBarnwal"));

