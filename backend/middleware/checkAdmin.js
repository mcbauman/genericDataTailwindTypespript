const jwt = require("jsonwebtoken")
const UserSchema = require("../schemas/userSchema");

async function checkAdmin(req,res,next){
    console.log("CheckAdmin");
    try {
        const authHeader=req.headers.authorization
        const token=authHeader.split(" ")[1]
        const payload=jwt.verify(token,process.env.SECRET)
        const user= await UserSchema.findById(payload.uid)
        if(user.role=="admin"){
            req.user=user
            next()
        }
        return next({status:401, message:"user is missing the rights"})
    } catch (error) {
        console.log(error);
        res.status(500).send(error)
    }
}
module.exports = {checkAdmin}
