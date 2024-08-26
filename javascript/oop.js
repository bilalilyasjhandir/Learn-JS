const user = {
    name: "Bilal",
    age: 20,
    isLoggedIn: true,
    getUserDetails: function(){
        console.log("Got all the user details");
        console.log(`Username: ${this.name}`);
        console.log(this);
        
    }
}

console.log(user.name);
console.log(user.getUserDetails());
console.log(this);

function User(name, age, isLoggedIn){
    this.name = name,
    this.age = age,
    this.isLoggedIn = isLoggedIn
    return this
}

const userOne = User("Ali", 25, true)
const userTwo = User("Ahmad", 30, false)
console.log(userOne); //will give the details of userTwo //use new keyword to avoid overwritting

const userThree = new User("Dawood", 35, true)
const userFour = new User("Shahid", 40, false)
console.log(userThree);


console.log(userOne.constructor);
