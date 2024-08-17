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