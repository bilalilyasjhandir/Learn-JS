function helloWorld(){
    console.log("Hello World");
}

helloWorld()

function addNumbers(num1, num2){
    console.log(num1 + num2);
}

addNumbers(1, 2)

const result = addNumbers(1, 2)
console.log(result); //undefined //use return

function addNumbers2(num1, num2){
    let result = num1 + num2
    return result
    // or just write
    // return num1 + num2
}

const result2 = addNumbers2(1, 2)
console.log(result2);

function loginMessage(username){
    if (username === undefined) {
    //or if (!username){
        console.log("Please enter a username");
        return
    }
    return `${username} just logged in`
}

console.log(loginMessage("Bilal"))
console.log(loginMessage());


function loginMessage2(username = "No one"){
    //or if (username === undefined) {
    if (!username){
        console.log("Please enter a username");
        return
    }
    return `${username} just logged in`
}

console.log(loginMessage2());
