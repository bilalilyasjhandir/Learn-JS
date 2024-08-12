//Immediately Invoked Function Expressions
//Syntax: 1st () for expression, 2nd () for execution
(function one(){
    console.log("Hello World");  
})(); //must add ;

( () => {
    console.log("Hello World"); 
} )()