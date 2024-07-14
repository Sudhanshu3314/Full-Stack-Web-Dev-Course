/* Create a Business Name Generator by combining list of adjectives and shop name and another word 

Adjectives : 
Crazy 
Amazing 
Fire

Shop Name :
Engine 
Foods 
Garments 

Another Word :
Bros
Limited 
Hub

For e.g. business name generated by mixing all of one word from Adjectives, Shop Name, Another word which will be like this 

Crazy Foods Hub
Amazing Engine Limited

*/

// Lets generate first adjective randomly
let randFirst = Math.random();
let first, second, third

// 0 to 0.33 and 0.33 to 0.66 and 0.66 to 1 
if (randFirst < 0.33) {
    first = "Crazy"
}
else if (randFirst >= 0.33 && randFirst < 0.66) {
    first = "Amazing"
}
else if (randFirst >= 0.66 && randFirst <= 1) {
    first = "Fire"
}

// lets generate shop name randomly
let randSecond = Math.random();
if (randSecond < 0.33) {
    second = "Engine"
}
else if (randSecond >= 0.33 && randSecond < 0.66) {
    second = "Foods"
}
else if (randSecond >= 0.66 && randSecond <= 1) {
    second = "Garments"
}

// Lets generate third random another word

let randThird = Math.random();
if (randThird < 0.33) {
    third = "Bros"
}
else if (randThird >= 0.33 && randThird < 0.66) {
    third = "Limited"
}
else if (randThird >= 0.66 && randThird <= 1) {
    third = "Hub"
}

console.log(`${first} ${second} ${third}`);