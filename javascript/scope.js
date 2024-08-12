//Global scope:
var c = 300


if(true){
    //Local scope:
    let a = 10
    const b = 20
    var c = 30 
}
//console.log(a); //will give error
//console.log(b); //will give error
console.log(c); //will run => not preferred to use

let d = 200
if(true){
    d = 2
    e = 3
    f = 4
    console.log("Inner: ", d);
}

console.log("Outer: ", d);

function parent(){
    const name = "Bilal"
    function child(){
        const subject = "English"
        //child function can access parent's elements
        console.log(`Hi ${name}! Today's subject is ${subject}`);
    }
    child()
    //parent function can't access child's elements
    //console.log(`Hi ${name}! Today's subject is ${subject}`); //gives error
}
parent()

//similar case with the if and similar statements
if(true){
    const score = 90
    if(score === 90){
        const congrat = "Congratulations"
        console.log(`${congrat} for scoring ${score} marks`);
    }
    //console.log(`${congrat} for scoring ${score} marks`); //gives error
}

//declare function normally => can be accessed anywhere
console.log(one(5))
function one(num){
    return num
}

//declare function in variable => can only be accessed after the declaration
//console.log(two(5)) //gives error
const two = function(num){
    return num
}
console.log(two(7));
