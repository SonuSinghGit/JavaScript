const arr1=[22,23,45,56]
const arr2 =[56,59,34,34]

const result = arr1.reduce((acc,val,index)=>{
  return  [...acc, val + arr2[index]]
},[])

// console.log(result)

// SECOND METHOD

const val1= [345,456,678,89,456]
const val2 =[677,78,89,90,784]

const output = val1.reduce((acc,val,index)=>{
    acc.push(val + val2[index]);
    return acc
},[])
// console.log(output)

// THIRD METHOD
