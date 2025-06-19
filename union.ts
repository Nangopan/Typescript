let val:number| string 

val=5
val="unknown"

type user={
    name:string;
    age:number;
}
type admin={
    username:string;
    age:number;
}
let val:user|admin={name:"nango",age:25}
val={username:"nangopan",age:30}

// Arrays
// can accept both string and array
let arr:number[]|string[]=[]