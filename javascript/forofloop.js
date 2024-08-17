const numbers = [1, 2, 3, 4, 5]
for (const num of numbers) {
    console.log(num);
}

const greetings = "Hi! How are you?"
for (const greet of greetings) {
    console.log(greet);
}

const map = new Map()
map.set('PK', "Pakistan")
map.set('IN', "India")
map.set('SK', "South Korea")
map.set('PK', "Pakistan")
map.set('PK', "Pakistan")

console.log(map);

for (const key of map) {
    console.log(key);
}

for (const [key, value] of map) {
    console.log(key, value);
}

const student = {
    name: "Bilal",
    id: 123,
    city: "Bahawalpur"
}

//forof loop will give error for objects
//use forin loop for objects
//for (const [key, value] of object) {
//   console.log(key, value);
//}

//use 'in' instead of 'of'
for (const key in student) {
    console.log(`${key} ${student[key]}`);
}