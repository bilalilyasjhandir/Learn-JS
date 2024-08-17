const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9]

const newNums2 = myNums.filter((num)=> num+5)
console.log(newNums2);

const newNums = myNums.map( (num)=> num+5)
console.log(newNums);

//chaining
const newNums3 = myNums.map((num)=> num*10).map((num)=> num+3).filter((num)=> num>=50)
console.log(newNums3);
