const express=require("express");
const router=express.Router();
const FixedAccount=require("../model/fixedAccount");
const masterAccount=require("../model/MasterAccount");
router.get("",async(req,res)=>{
    try {
        fixedAccount= await FixedAccount.find().lean().exec();
        return res.status(200).send(fixedAccount);
    } catch (error) {
        return res.status(500).send({ message: err.message });
    }
});
router.post("",async(req,res)=>{
    try {
        fixedAccount= await FixedAccount.create(req.body)
        res.status(200).send(fixedAccount);
        let x=fixedAccount._id;
        master= await masterAccount.findById(fixedAccount.masterId);
        master.fixedAccountId.push(x);
        master.balance=master.balance+fixedAccount.balance;
        master1= await masterAccount.findByIdAndUpdate(fixedAccount.masterId,master);
    } catch (error) {
        return res.status(500).send({ message: err.message });
    }
});

module.exports=router;