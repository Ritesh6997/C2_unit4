const mongoose=require("mongoose");

const masterAccountSchema= new mongoose.Schema({
    balance:{type:Number,required:true},
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user",
        required: true,
      },
    savingAccountId:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: "savingAccount",
      }],
    fixedAccountId:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: "fixedAccount",
      }],
},{
    timestamps:true
});

const MasterAccount= mongoose.model("masterAccount",masterAccountSchema);

module.exports=MasterAccount;