//use => to declare functions:
() => {}

const one = () => {
    console.log(this);
    
}
one()



const two = (num1, num2) => {return num1+num2}
const three = (num1, num2) => (num1+num2)
const four = (num1, num2) => num1+num2

console.log(two(2, 3));
console.log(three(2, 3));
console.log(four(2, 3));



const five = (num1, num2) => {username = "Bilal"}
console.log(five(2, 3));

const six = (num1, num2) => ({username: "Bilal"})
console.log(six(2, 3));

