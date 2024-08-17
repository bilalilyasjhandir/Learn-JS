const coding = ["java", "python", "c++", "html", "css", "javascript"]

coding.forEach( function (code){
    console.log(code);
})

coding.forEach((code)=>{
    console.log(code);
})

function printIt(code){
    console.log(code);
}
coding.forEach(printIt)

coding.forEach((value, index, array)=>{
    console.log(value, index, array);
})

const codingLanguages = [
    {
        lan: "javascript",
        shortcut: "js"
    },
    {
        lan: "python",
        shortcut: "py"
    },
    {
        lan: "java",
        shortcut: "java"
    }
]

codingLanguages.forEach((item)=>{
    console.log(item.lan);
    console.log(item.shortcut);
})

const values = coding.forEach((item) => {
    console.log(item);
    return item
})
console.log(values); //foreach loop doesn't return items

const myNums = [1, 2, 3, 4, 5 , 6, 7, 8, 9]

const newNums = myNums.filter( (num) => {
    return num > 5
})
console.log(newNums);

const newNums2 = myNums.filter( (num) => num > 5)
console.log(newNums2);

const newNums3 = []
myNums.forEach((num) => {
    if (num > 5) {
        newNums3.push(num)
    }
})
console.log(newNums3);
