const express = require("express")
const checkAuth = require("../middleware/checkAuth")
const KeySchema = require("../schemas/keySchema.JS");
const {valueSchema} = require("../schemas/valueSchema")

const keyRouter=express.Router()

keyRouter.get("/requestKeys",checkAuth.checkAuth, async (req,res)=>{
    console.log("REQUEST on /requestKeys")
    try {
        const result = await KeySchema.find().sort({index:1})
        let genericSchema={}
        result.forEach(element=>{
            if(element.type=="Array"){
                genericSchema[element.name]="String"
            }
            else if(element.type=="Object"){
                genericSchema[element.name]="Mixed"
            }
            else{
                genericSchema[element.name]=element.type
            }
        })
        valueSchema.add(genericSchema)
        res.send(result)   
    } catch (error) {
        console.log(error);
        res.status(500).send(error)
    }
})

keyRouter.post("/postKeys",checkAuth.checkAuth, async (req,res)=>{
    console.log("REQUEST on /postKeys",req.body)
    try {
        const result = await KeySchema.create(req.body)
        res.status(200).send(result)
    } catch (error) {
        console.log(error);
        res.status(500).send(error)
    }
})

keyRouter.put("/updateKey", checkAuth.checkAuth, async (req,res)=>{
    console.log("UpdateKey",req.body);
    try {
        const result=await KeySchema.findByIdAndUpdate(req.body._id,req.body.update,{new:true})
        res.status(200).send(result)
    } catch (error) {
        console.log(error);
        res.status(500).send(error)
    }
})

keyRouter.delete("/removeKey", checkAuth.checkAuth, async (req, res)=>{
    console.log("REQUEST on /removeKey",req.body)
    try {
        const result=await KeySchema.deleteOne(req.body)
        res.send(result)
    } catch (error) {
        console.log(error);
        res.status(500).send(error)
    }
})

module.exports = keyRouter