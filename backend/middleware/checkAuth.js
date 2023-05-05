const jwt = require("jsonwebtoken")
const UserSchema = require("../schemas/userSchema");

async function checkAuth(req,res,next){
    try {
        const authHeader=req.headers.authorization
        const token=authHeader.split(" ")[1]
        const payload=jwt.verify(token,process.env.SECRET)
        const user= await UserSchema.findById(payload.uid)
        if(!user){
            return next({status:401, message:"user not found"})
        }
        req.user=user
        next()
    } catch (error) {
        console.log(error);
        res.status(500).send(error)
        }

}
module.exports = {checkAuth}
