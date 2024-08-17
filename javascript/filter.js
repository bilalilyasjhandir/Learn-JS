const myNums = [1, 2, 3, 4, 5 , 6, 7, 8, 9]

const newNums = myNums.filter( (num) => {
    return num > 5
})
console.log(newNums);

const newNums2 = myNums.filter( (num) => num > 5)
console.log(newNums2);

const books = [
    {
        title: "A Little Life",
        genre: "Novel",
        published: 2002,
        edition: 2008
    },
    {
        title: "It Ends With Us",
        genre: "Fantasy",
        published: 2014,
        edition: 2024
    },
    {
        title: "Verity",
        genre: "Horror",
        published: 2010,
        edition: 2022
    },
    {
        title: "The Great Gatsby",
        genre: "Novel",
        published: 1990,
        edition: 1999
    },
    {
        title: "AGGGTM",
        genre: "Thriller",
        published: 2007,
        edition: 2014
    },
    {
        title: "Shatter Me",
        genre: "Fiction",
        published: 2011,
        edition: 2021
    },
    {
        title: "Better Than Movies",
        genre: "Fantasy",
        published: 2021,
        edition: 2024
    },
]

let userBooks = books.filter( (book)=> book.genre === "Fantasy")
console.log(userBooks);
userBooks = books.filter( (book)=> book.published >= 2005)
console.log(userBooks);
userBooks = books.filter( (book)=> book.genre === "Fantasy" && book.published >= 2005)
console.log(userBooks);
