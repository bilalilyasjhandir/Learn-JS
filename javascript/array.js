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