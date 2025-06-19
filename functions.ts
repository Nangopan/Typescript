// based on parameters
function add(num1:number,num2:number){
  return num1+num2
}

function signUp(name:string,age:number,place:string = "India"){}
 

console.log(add(1,2))

// based on return values

function sum(num:number):number{
    return num+2
}

// arrow functions

let sum=(num:number):number{
    return num+2
}

// Handle error
function handleError(errormsg:string):never{
    throw new Error("Invalid entry")
} 

// Objects

function signup({name:string,isUser:boolean}):{name:string,isUser:boolean}
{
    return {name:"nangopan",isUser:true}
}

// aliases

type user={
    name:string;
    age:number;
}

function info(val:user):string{
    return "hiii"
}
info({name:"Bharath",age:20})

// readonly
type User={
   readonly    name:string;
    age:number;
    isUser?:boolean;
}          
let user1:User={
    name:"Nangopan",
    age:25,
    isUser:true,
}
user1.name="Madhan"
user1.age=55  

let user2:User={
    name:"kumar",
    age:50
}

// manytypes scenario(credit card)
type cardNo={
    id:number;
}
type cardName={
    name:string;
}
type cardDetails=cardNo & cardName & {
    cvv:number;
}


// Arrays
// let users:string[]=[]
// users.push(1)

// let users:number[]=[] (similar to) let users:Arrray<number>=[]
// users.push("g")

// let users:number[][]=[
// [5],[2]
// ]

// object inside an array
type user={
    name:string;
    age:number;
}
let user:user[]=[]

user.push({name:"nan",age:25})




