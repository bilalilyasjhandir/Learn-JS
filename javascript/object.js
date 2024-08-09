//two ways to declare objects
//1- Literal
//2- Constructor => singleton

const student = {
    name: "Bilal",
    age: 20,
    occupation: "Student",
    "birth city": "Bahawalpur"
}

console.log(student.name);
console.log(student["occupation"]);
//console.log(student.birth city);   //can not
console.log(student["birth city"]); 

const symbol = Symbol("key1")
const student2 = {
    name: "Ali",
    age: 25,
    occupation: "Student",
    city: "Lahore",
    [symbol]: "newKey1"  //access symbols like this
}

console.log(student2[symbol]);

student2.city = "Karachi"
Object.freeze(student2)
student2.city = "Islamabad"
console.log(student2);

student.greeting = function(){
    console.log("Hello World!");
    
}
student.myName = function(){
    console.log(`My name is ${this.name}`);
    
}

console.log(student.greeting());
console.log(student.myName());