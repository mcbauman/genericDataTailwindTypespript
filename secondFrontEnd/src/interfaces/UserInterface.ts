interface UserInterface{
    _id?:string;
    token?:string|null;
    name:string|null;
    password?:string|null;
    maincontrast?:string;
    maincolor?:string;
    role?:"admin"|"user";
    Keys?:String[];
    Values?:string[];
    __v?:any;
}

export default UserInterface

//readonly before the key
//rückgabewert function name():string{
//    
//}