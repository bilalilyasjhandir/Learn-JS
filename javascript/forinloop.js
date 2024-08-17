
const student = {
    name: "Bilal",
    id: 123,
    city: "Bahawalpur"
}

//forof loop will give error
//use forin loop
//for (const [key, value] of object) {
//   console.log(key, value);
//}

for (const key in student) {
    console.log(`${key} ${student[key]}`);
}

const teachers = ["Ahmad", "Ali", "Dawood"]
for (const key in teachers) {
    console.log(`${key} ${teachers[key]}`);
}

const map = new Map()
map.set('PK', "Pakistan")
map.set('IN', "India")
map.set('SK', "South Korea")
map.set('PK', "Pakistan")
map.set('PK', "Pakistan")

//it wont print anything
for (const key in map) {
    console.log(key); 
}