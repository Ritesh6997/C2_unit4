const express=require("express");

const usersController = require("./controller/userController");
const masterController = require("./controller/masterAccountController");
const savingController = require("./controller/savingAccountController");
const fixedController = require("./controller/fixedAccountController");
const app=express();
app.use(express.json());

app.use("/users", usersController); 
app.use("/masterAccount", masterController);
app.use("/savingAccount", savingController);
app.use("/fixedAccount", fixedController);
app.use("/maturity", fixedController);


module.exports=app;