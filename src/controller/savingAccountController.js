const express=require("express");
const router=express.Router();
const SavingAccount=require("../model/savingsAccount")
const masterAccount=require("../model/MasterAccount")
router.get("",async(req,res)=>{
    try {
        savingAccount= await SavingAccount.find().lean().exec();
        return res.status(200).send(savingAccount);
    } catch (error) {
        return res.status(500).send({ message: err.message });
    }
});
router.post("",async(req,res)=>{
    try {
        savingAccount= await SavingAccount.create(req.body)
        let x=savingAccount._id;
        master= await masterAccount.findById(savingAccount.masterId);
        master.savingAccountId.push(x);
        master.balance=master.balance+savingAccount.balance;
        master1= await masterAccount.findByIdAndUpdate(savingAccount.masterId,master);
        res.status(200).send(savingAccount);
        
    } catch (error) {
        return res.status(500).send({ message: err.message });
    }
});

module.exports=router;