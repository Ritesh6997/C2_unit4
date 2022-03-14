const mongoose=require("mongoose");

const savingAccountSchema= new mongoose.Schema({
    accountNumber:{type:Number,required:true,unique:true},
    balance:{type:Number,required:true},
    interestRate:{type:Number,required:true},
    masterId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "masterAccount", required:true,
      },
},{
    timestamps:true
});

const SavingAccount= mongoose.model("savingAccount",savingAccountSchema);

module.exports=SavingAccount;