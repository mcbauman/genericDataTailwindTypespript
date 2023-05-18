const mongoose = require("mongoose")

const keySchema=new mongoose.Schema({
    name:{type:String, required:true, unique:true },
    type:{type:String, enum:["String","Number","Date","Boolean","Array","Object"],required:true},
    index:Number,
    index2:Number,
    minRange:Number,
    maxRange:Number,
    arrayOption:[String],
    // arrayOptions:{type:[{type:Schema.Types.Mixed,required:function(){return this.type=="Array"}}],default:undefined},
    objectEntries:[{}]
    // objectEntries:{type:{},required:function(){return this.type=="Object"}}
},
{
    toJSON:{
        transform(doc,ret){
            // delete ret._id
            delete ret.__v
        }
    }
})

const KeySchema=mongoose.model("FieldDefinition",keySchema)

module.exports = KeySchema;