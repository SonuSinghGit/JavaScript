const obj1 = {a:1,b:2}
const obj2={b:5,c:6}

function mergeTwoObjects(obj1,obj2){
    return{...obj1,...obj2}  // if you want to replace old value then sperade obj2 first (looks what question said wich value need either old one or new one sperade according to need)
}
const result = mergeTwoObjects(obj1,obj2)

console.log(result)


// Code	Result
// {...obj1, ...obj2}	obj2 overrides
// {...obj2, ...obj1}	obj1 overrides

