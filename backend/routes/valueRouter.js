const express = require("express")
const checkAuth = require("../middleware/checkAuth")
const { ValueSchema} = require("../schemas/valueSchema")
const valueRouter=express.Router()

valueRouter.get("/getValues",checkAuth.checkAuth, async (req,res)=>{
    console.log("REQUEST on /getValues")
    try {
       const result = await ValueSchema.find()
       res.send(result) 
    } catch (error) {
        console.log(error);
        res.status(500).send(error)
    }
})

valueRouter.post("/addValues", checkAuth.checkAuth, async (req,res)=>{
    console.log("REQUEST on /addValues",req.body)
    try {
        const result = await ValueSchema.create(req.body)
        res.send(result)
    } catch (error) {
        console.log(error);
        res.status(500).send(error)
    }
})

valueRouter.put("/updateValue", checkAuth.checkAuth, async (req,res)=>{
    console.log("REQUEST on /updateValue",req.body)
    try {
        const result= await ValueSchema.findOneAndUpdate({_id:req.body._id}, req.body,{new:true})
        res.send(result)
    } catch (error) {
        console.log(error);
        res.status(500).send(error)
    }
})

valueRouter.delete("/deleteValue", checkAuth.checkAuth, async (req,res)=>{
    console.log("REQUEST on /removeAllKeys")
    try {
        console.log("REQUEST on /deleteValue")
        const result=await ValueSchema.findByIdAndDelete(req.body._id)
        res.send(result)
    } catch (error) {
        console.log(error);
        res.status(500).send(error)
    }
})

module.exports = valueRouter