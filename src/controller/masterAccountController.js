const express=require("express");
const router=express.Router();
const MasterAccount=require("../model/MasterAccount");
const SavingAccount = require("../model/savingsAccount");

router.get("",async(req,res)=>{
    try {
        masterAccount= await MasterAccount.find().populate({
            path:"userId",
        }).lean().exec();
        return res.status(200).send(masterAccount);
    } catch (error) {
        return res.status(500).send({ message: err.message });
    }
});
router.get("/:id",async(req,res)=>{
    try {
        masterAccount= await MasterAccount.findById(req.params.id).select({"balance":1,"savingAccountId":1,"fixedAccountId":1}).lean().exec();

        return res.status(200).send(masterAccount);
    } catch (error) {
        return res.status(500).send({ message: err.message });
    }
});
router.post("",async(req,res)=>{
    try {
        masterAccount= await MasterAccount.create(req.body)
        res.status(200).send(masterAccount);
    } catch (error) {
        return res.status(500).send({ message: err.message });
    }
});

module.exports=router;