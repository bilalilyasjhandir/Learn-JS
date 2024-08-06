let date1 = new Date()

console.log(typeof date1);

console.log(date1); //not readable
console.log(date1.toString());
console.log(date1.toDateString());
console.log(date1.toLocaleString());
console.log(date1.toLocaleDateString());

let date2 = new Date(2024, 0, 6) //months start with 0 index
console.log(date2.toLocaleString());

let date3 = new Date(2024, 0, 6, 10, 53) //date and time
console.log(date3.toLocaleString());

let date4 = new Date("2024-01-06") //exact date
console.log(date4.toLocaleString());

let date5 = Date.now() //tells current date in milliseconds
console.log(date5);

console.log(date4.getTime()); //converts date into milliseconds

console.log(Math.floor(Date.now()/1000)); //tells current date in seconds

console.log((date4.getMonth())+1);
console.log(date4.getDay());

console.log(date5.toLocaleString('default', {
    weekday: "long"
    //press ctrl + space to show all the properties
}));

