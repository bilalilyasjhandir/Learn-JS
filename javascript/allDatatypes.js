//Two types of datatypes => Primitive and Non-Primitive
//Seven Primitive datatypes
//1-Number
console.log(12)
console.log(12.5)
//2-String
console.log("Bilal")
//3-Boolean
console.log(true)
console.log(false)
//4-Null
console.log(null)
//5-Undefined
console.log(undefined)
//6-BigInt
console.log(126137273189182n)
//7-Symbol
let num1 = Symbol('123')
let num2 = Symbol('123')
console.log(num1 === num2)

//Three Non-Primitive Datatypes
//1-Array
let array = ["Bilal", "Ali", "Ahmad", "Dawood"]
//2-Objects
let objects = {
    name: "Bilal",
    age: 20,
    occupation: "Student"
}
//3-Functions
let myfunction = function(){
    console.log("Hello World")
}

//To check the datatype => use typeof