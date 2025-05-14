
function fun(obj1,obj2){
    let merge=Object.assign(obj1,obj2)
    console.log(merge)
    console.log(obj1)//when we are assing to any object in this case object will change
    console.log(obj2)
    
}


const obj1 = { name: "John", age: 30 };
const obj2 = { age: 40, city: "New York" };
console.log(fun(obj1,obj2))












