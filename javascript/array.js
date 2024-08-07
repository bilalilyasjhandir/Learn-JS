//two ways to declare arrays
const array1 = [0, 1, 2, 3, 4, 5]
const array2 = new Array(0, 1, 2, 3, 4, 5)

console.log(array1[2]);

//Array Methods
array1.push(6) //adds at last position
console.log(array1);

array1.pop() //removes from last position
console.log(array1);

array1.shift() //removes from first position
console.log(array1);

array1.unshift(9) //adds at first position
console.log(array1);

console.log(array1.includes(9)) //checks if array has this value

console.log(array1.indexOf(3)) //index number if exists
console.log(array1.indexOf(19)) //false if does not exist

const array3 = array1.join()
console.log(array1);
console.log(array3); //joins two arrays as string

console.log(array1)
console.log(array1.slice(1, 3)); //gets values without manipulating original array
console.log(array1); //the array is same

console.log(array1.splice(1, 3)); //gets values by manipulating original array
console.log(array1); //the array is changed

const arrayStudents = ["Bilal", "Ali", "Ahmad"]
const arrayTeachers = ["Faiz", "Dawood", "Hassan"]

arrayStudents.push(arrayTeachers) //sets array as an element of other
console.log(arrayStudents);
console.log(arrayStudents[3]); 
console.log(arrayStudents[3][2]); //access elements inside array element

//two methods for joining arrays properly
joinedArray1 = arrayStudents.concat(arrayTeachers)
console.log(joinedArray1);

joinedArray2 = [...arrayStudents, ...arrayTeachers]
console.log(joinedArray2);


const complexArray = [1, 2, 3, [4, 5], 6, 7, [8, 9, [10, 11], 12]]
const simpleArray = complexArray.flat(Infinity) //simplifies arrays
console.log(simpleArray);

console.log(Array.isArray("Bilal")); //checks array
console.log(Array("Bilal Jhandir")); //creates array with one element
console.log(Array.from("Bilal Jhandir")); //creates array with each element seperately
console.log(Array.from({name: "Bilal"})); //can not

let age1 = 20
let age2 = 25
let age3 = 30
console.log(Array.of(age1, age2, age3)); //creates array of variables
