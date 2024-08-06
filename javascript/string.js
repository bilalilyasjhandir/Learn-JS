let name = "Bilal"
let age = 20
console.log("My name is " + name + " and my age is " + age)
console.log(`My name is ${name} and my age is ${age}`) //preferred way

let gameName = new String("bilal striker")
console.log(gameName[0])
console.log(gameName.__proto__)
console.log(gameName.toUpperCase())
console.log(gameName.charAt(4))
console.log(gameName.indexOf('l'))

let halfString1 = gameName.substring(0, 5)
console.log(halfString1)

let halfString2 = gameName.slice(-12, 5)
console.log(halfString2)

let newName = "  Bilal  "
console.log(newName)
console.log(newName.trim())

console.log(gameName.replace('striker', 'jhandir'))

console.log(gameName.includes('striker'))
console.log(gameName.includes('ilyas'))

console.log(gameName.split())