const promise = new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("This async task is executed after 2 seconds")
        resolve()
    }, 2000)
})
promise.then(function(){
    console.log("Task executed successfully")
})

//can also be written as
new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("This async task is executed after 4 seconds")
        resolve()
    }, 4000)
}).then(function(){
    console.log("Task executed successfully")
})


const promiseThree = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve({username: "bilalilyasjhandir", age: 20, email:"bilaljhandir007@gmail.com"})
    }, 5000)
})
promiseThree.then(function(user){
    console.log(user)
})

const promiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true //reject
//      let error = false //resolve
        if(!error){
            resolve({username: "bilalilyasjhandir", age: 20, email:"bilaljhandir007@gmail.com"})
        }
        else{
            reject("Error! Something went wrong")
        }
    }, 7000)
})
promiseFour.then(function(user){
    console.log(user)
    return user.username
}).then(function(username){
    console.log(username)
}).catch(function(error){
    console.log(error)
}).finally(function(){
    console.log("This promise is either resolved or rejected")
})

const promiseFive = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true //reject
//      let error = false //resolve
        if(!error){
            resolve({username: "ahmadali", age: 30, email:"ahmadali@gmail.com"})
        }
        else{
            reject("Error! Something went wrong AGAIN")
        }
    }, 8000)
})
async function promiseFiveExecute() {
    try {
        const response = await promiseFive
        console.log(promiseFive);
    } catch (error) {
        console.log(error);
    }
}
promiseFiveExecute()

async function getUserDetails() {
    try {
        const response = await fetch('https://api.github.com/users/bilalilyasjhandir')
        const data = await response.json()
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}
getUserDetails()

//can also be written as:
fetch('https://api.github.com/users/bilalilyasjhandir')
.then((response)=>{
    return response.json()
})
.then((data)=>{
    console.log(data);
})
.catch((error)=> console.log(error))