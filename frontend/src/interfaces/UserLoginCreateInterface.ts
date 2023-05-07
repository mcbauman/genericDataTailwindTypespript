export default interface UserLoginCreateInterface{
    name:string|null;
    password:string|null;
    role?:"admin"|"user";
    maincolor?:string;
    maincontrast?:string;
}