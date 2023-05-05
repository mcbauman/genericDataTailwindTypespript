require("dotenv").config()
const express = require("express")
const cors = require("cors")

const userRouter = require("./routes/userRouter")
const keyRouter = require("./routes/keyRouter")
const valueRouter = require("./routes/valueRouter")
const mongooseConnect=require("./helpers/mongooseConnect.js")

mongooseConnect.connectMongoose()

const app=express();
app.use(cors());
app.use(express.json());

app.use("/user",userRouter);
app.use("/key",keyRouter);
app.use("/value",valueRouter);

app.listen(process.env.PORT,()=>{
    console.log("Server up on ", process.env.PORT);
})