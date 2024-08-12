const user = {
    username: "Bilal",
    welcome : function(){
        console.log(`Hi ${this.username}! Welcome to our website.`);
        console.log(this);
    }
}
//welcome() //error
user.welcome()
user.username = "Ahmad"
user.welcome()

console.log(this);

function one(){
    let person = "Ali"
    console.log(this.person); //won't work   
}
one()

function two(){
    console.log(this);
}
two()
