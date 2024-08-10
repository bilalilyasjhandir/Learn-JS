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


//singleton object
const user1 = Object()
console.log(user1);

//non-singleton object 
const user2 = {}
console.log(user2);

user1.id = "1001"
user1.name = "Bilal"
user1.fullname = {
    userFullname: {
        firstName: "Bilal",
        midName: "Ilyas",
        lastName: "Jhandir"
    }
}

console.log(user1.fullname.userFullname);

//combine two or more objects
const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "c", 4: "d"}
const obj3 = {5: "e", 6: "f"}

//does not work properly
const obj4 = {obj1, obj2}
console.log(obj4);

//works properly
const obj5 = Object.assign({}, obj1, obj2, obj3)
console.log(obj5);

//more easy method
const obj6 = {...obj1, ...obj2, ...obj3}
console.log(obj6);

const users = [
    {
        //objects within an array
    }
]

console.log(Object.keys(user1));
console.log(Object.values(user1));
console.log(Object.entries(user1));

console.log(user1.hasOwnProperty('id'));
console.log(user1.hasOwnProperty('mobile'));