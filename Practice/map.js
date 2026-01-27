const myNums = [1,2,34,5,5,67,]

const res = myNums.filter( (num)=>{
     return num>4
})
// console.log("filter",res);

// how we do it through foreach 

const newNums =[]

myNums.forEach((num)=>{
    if(num>4){
        newNums.push(num)
    }
})
// console.log("foreach",newNums)

const books = [
  {
    title: "Clean Code",
    genre: "Programming",
    edition: 1990,
    publishYear: 2008,
  },
  {
    title: "The Pragmatic Programmer",
    genre: "Software Engineering",
    edition: 200,
    publishYear: 2019,
  },
  {
    title: "You Don’t Know JS",
    genre: "JavaScript",
    edition: 1989,
    publishYear: 2020,
  },
  {
    title: "Design Patterns",
    genre: "Software Architecture",
    edition: 1898,
    publishYear: 1994,
  },
  {
    title: "Introduction to Algorithms",
    genre: "JavaScript",
    edition: 1909,
    publishYear: 2009,
  },
  {
    title: "Atomic Habits",
    genre: "Self Development",
    edition: 1909,
    publishYear: 2018,
  },
  {
    title: "Deep Work",
    genre: "Self Development",
    edition: 2000,
    publishYear: 2016,
  },
  {
    title: "The Lean Startup",
    genre: "Business",
    edition: 1976,
    publishYear: 2011,
  },
  {
    title: "Eloquent JavaScript",
    genre: "Programming",
    edition: 1908,
    publishYear: 2018,
  },
  {
    title: "Refactoring",
    genre: "Code Quality",
    edition: 1908,
    publishYear: 2018,
  },
];

// let userBooks = books.filter( (num)=> num.edition ===1908 );

userBooks = books.filter((bk)=>{
       return bk.edition === 1908 && bk.publishYear > 1900;
})

// console.log(userBooks)

// REDUCE

const myNums2 =[1,2,3]

const totalSum = myNums2.reduce( (acc,currValue)=>{
  // console.log(`Acc is: ${acc} and Current value is: ${currValue}`);
  return acc+currValue
},0)
// console.log(totalSum)


const shoppingCard = [
  {
    itemName:"mobile course",
    price:1000
  },
  {
    itemName:"js course",
    price:9000
  },
  {
    itemName:"web course",
    price:9900
  },
  {
    itemName:"data science course",
    price:999
  },
]

const totalPrice=shoppingCard.reduce( (acc,item)=>{
  return acc + item.price;
},0)

console.log(totalPrice)