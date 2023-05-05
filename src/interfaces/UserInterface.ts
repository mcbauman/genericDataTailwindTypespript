interface UserInterface{
    _id?:string;
    token?:string|null
    name?:string;
    password?:string
    maincontrast?:string
    maincolor?:string
    role?:"admin"|"user";
    Keys?:String[];
    Values?:string[];
}

export default UserInterface

//readonly before the key
//rückgabewert function name():string{
//    
//}