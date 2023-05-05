const mongoose = require("mongoose")

const valueSchema=new mongoose.Schema({},{
    toJSON:{
        transform(doc,ret){
            delete ret.__v
        }
    }
})
const ValueSchema=mongoose.model("Values",valueSchema)

module.exports = {ValueSchema, valueSchema}