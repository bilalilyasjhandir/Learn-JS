console.log(Math);
console.log(Math.abs(-2));

console.log(Math.round(8.6));
console.log(Math.ceil(8.6));
console.log(Math.floor(8.6));

console.log(Math.min(2, 3, 5, 7, 9));
console.log(Math.max(2, 3, 5, 7, 9));

console.log(Math.random()); //prints a random number between 0 and 1
console.log((Math.random() * 10) + 1); //will always print greater than 0 
console.log(Math.floor((Math.random() * 10) + 1)); //will always print greater than 0 with no decimals

let min = 10
let max = 20

//important formula!
console.log(Math.floor(Math.random() * (max-min + 1 ) + min));
