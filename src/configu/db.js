const mongoose=require("mongoose");
const connect =()=>{
    mongoose.connect("mongodb+srv://Ritesh6997:Ritesh6997@cluster0.9cfqh.mongodb.net/Banking_data?retryWrites=true&w=majority")
}
module.exports=connect;