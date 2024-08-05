//Two types of memory => Stack and Heap
//1-Stack
//Used for primitive datatypes
//Will give copy of one thing to another
let name1 = "Bilal"
let name2 = name1
name2 = "Ali"

console.log(name1)
console.log(name2)

//2-Heap
//Used for non-primitive datatypes
//Will give a reference to other
let myObj1 = {
    name3: "Bilal",
    age: 20
}
let myObj2 = myObj1
myObj2.name3 = "Ahmad"
console.log(myObj1.name3)
console.log(myObj2.name3)