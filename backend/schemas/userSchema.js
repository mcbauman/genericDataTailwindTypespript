const mongoose = require("mongoose")

const userSchema=new mongoose.Schema({
    name:{type:String, required:true, unique:true },
    password:{type:String, required:true,},
    role:{type:String, enum:["admin","user"],required:true},
    Keys:[String],
    Values:[String],
    maincolor:String,
    maincontrast:String
},
{
    toJSON:{
        transform(doc,ret){
            // delete ret._id
            delete ret.__v
            delete ret.password
        }
    }
})

const UserSchema=mongoose.model("Users",userSchema)

module.exports = UserSchema;