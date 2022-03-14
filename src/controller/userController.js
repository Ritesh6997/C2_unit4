const express=require("express");
const router=express.Router();
const User=require("../model/user")

router.get("",async(req,res)=>{
    try {
        user= await User.find().lean().exec();
        return res.status(200).send(user);
    } catch (error) {
        return res.status(500).send({ message: err.message });
    }
});
router.post("",async(req,res)=>{
    try {
        user= await User.create(req.body)
        res.status(200).send(user);
    } catch (error) {
        return res.status(500).send({ message: err.message });
    }
});

module.exports=router;