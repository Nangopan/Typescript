interface user{
    name:string,
    email:string,
    // greet:()=>string
    greet():string
    getDetail(name:string):string
}

interface admin extends user{
    employed:string
}

let user1:user={name:"nangopan",email:"abc@123",greet:()=>"hiii",getDetail:(personname)=>"addrress"}
let user2:admin={name:"nangopan",email:"abc@123",employed:"yes",greet:()=>"hiii",getDetail:(personname)=>"addrress"}
export {}