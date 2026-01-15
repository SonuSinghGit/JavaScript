const actor= [
    {
        name:"sonu",
        payment:200
    },
    {
        name:"Aman",
        payment:300
    },
    {
        name:"ashish",
        payment:500
    }
]

// for(let i=0; i<actor.length;i++){
//     // console.log(actor[i]);
//     actor[i].payment = actor[i].payment-20;
    
// }
// console.log(actor);

// FOREaCH loop
// actor.forEach((actor)=>{
//     // console.log(actor);
//     actor.payment  = actor.payment-10;
// })
// console.log(actor);

//FILTER

const student =[
    {
        name:"student 1",
        marks:66
    },
    {
        name:"student 2",
        marks:55
    },
    {
        name:"student 3",
        marks:34
    }
]
const fil= student.filter((index)=>{
    //  console.log(i);
    if(index.marks > 50){
        return true;
    }else return false;
     
})
// console.log(fil); //[ { name: 'student 1', marks: 66 }, { name: 'student 2', marks: 55 } ]
// console.log(student)
// [
//   { name: 'student 1', marks: 66 },
//   { name: 'student 2', marks: 55 },
//   { name: 'student 3', marks: 34 }
// ]

//MAP
const user =[
    {
        fname:"sonu",
        lname:"singh"
    },
    {
        fname:"aman",
        lname:"yadav"
    }
]
const res= user.map((user)=>{
    return {
        fullname: `${user.fname} ${user.lname}`
    }
})
// console.log(res);

//REDUCE
 const movie = [
    {
        name:"heropanti",
        budget: 200
    },
     {
        name:"tiger",
        budget: 100
    },
     {
        name:"panchayat",
        budget: 150
    }
 ]

//  let total = 0;
//  movie.forEach((movie)=>{
//     total += movie.budget;
//  })
//  console.log(total); //450

const total = movie.reduce((acc,movie)=>{
    acc =acc + movie.budget;
    return acc;
},0)
// console.log(total);//450

//INDEX OF
const admin = [2 , 5, 7];

const users = 
    {
        name:"sonu",
        id:2
    }

    // const isAdmin= admin.indexOf(users.id)>-1;
    // console.log(isAdmin);//true
    // INCLUDES
    console.log(admin.includes(users.id));//true
    


 

    
    







