interface User{
    firstName:String,
    lastName:String,
    age:number,

}
function isValid(user:User){
    if(user.age>18){
        return true;
    }
    else{
        return false
    }
}
console.log(isValid({
    firstName:"Mihir",
    lastName:"Kate",
    age:19,
}))