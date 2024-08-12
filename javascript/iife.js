//Immediately Invoked Function Expressions
//Syntax: 1st () for expression, 2nd () for execution

//named IIFE
(function one(){
    console.log("Hello World");  
})(); //must add ;

//unnamed IIFE
( () => {
    console.log("Hello World"); 
} )();

( (name) => {
    console.log(`Hello ${name}`); 
} )("Bilal")