const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9]

const newNums = myNums.reduce(function(accumulator, currentValue){
    console.log(`Accumulator Value: ${accumulator}, Current Value: ${currentValue}`);
    return accumulator + currentValue
}, 0)
console.log(newNums);

const newNums2 = myNums.reduce((accumulator, currentValue) => accumulator+currentValue, 0)
console.log(newNums2);

const shoppingCart = [
    {
        itemName: "Mobile",
        price: 2500,
    },
    {
        itemName: "Laptop",
        price: 4500,
    },
    {
        itemName: "Watch",
        price: 700,
    },
    {
        itemName: "Charger",
        price: 200,
    },
]
const total = shoppingCart.reduce( (acc, item) => acc+item.price, 0)
console.log(`Your total bill is: ${total}`);
