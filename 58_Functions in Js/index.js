function nice(names) {
    console.log("Hey " + names + " you are nice ");
    console.log("Hey " + names + " you are a good boy ");
}

nice("sudhanshu")

function add(a, b) {
    return a + b;
}

function addition(a, b , c = 4 ) { // Default value having to c variable
    return a + b + c ;
}

let ans = addition( 5 , 6 );
console.log("Default value addition function return " + ans );

let result1 = add(5)
let result2 = add(5,5)
let result3 = add(2,6)
let result4 = add(5,83)

console.log( "Result 1 : " + result1);
console.log( "Result 2 : " + result2);
console.log( "Result 3 : " + result3);
console.log( "Result 4 : " + result4);

console.log("Sum of 4 and 6 is " + add(4,6));

const func1 = (x) => {
    console.log("I am an arrow function " + x );
}

func1(52)
func1(426)
func1(253)