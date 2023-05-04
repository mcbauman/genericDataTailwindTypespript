export default interface KeysInterface{
    name:{type:String};
    type:"String"|"Number"|"Date"|"Boolean"|"Array"|"Object";
    index?:Number;
    minRange?:Number;
    maxRange?:Number;
    arrayOption:String[];
    objectEntries:any[];
}

// export default interface KeysInterface<KeyInterface>{
//     []KeyInterface
// }


// interface KeyInterface{
//     name:{type:String};
//     type:"String"|"Number"|"Date"|"Boolean"|"Array"|"Object";
//     index?:Number;
//     minRange?:Number;
//     maxRange?:Number;
//     arrayOption:String[];
//     objectEntries:any[];
// }