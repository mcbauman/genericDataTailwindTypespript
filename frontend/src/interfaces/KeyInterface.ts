export default interface KeysInterface{
    name:String;
    type:"String"|"Number"|"Date"|"Boolean"|"Array"|"Object";
    index?:Number;
    index2?:number;
    minRange?:Number;
    maxRange?:Number;
    arrayOption:String[];
    objectEntries:KeysInterface[];
}