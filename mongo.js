const mongoose = require("mongoose");

//connecting to data base
mongoose.connect("mongodb+srv://aromalsraj03:aromal@cluster0.hyaly2t.mongodb.net/").then(()=>{
    console.log("mongodb connected");
})
.catch(()=>{
    console.log("failed");
})


//Scheme creation
const schema = mongoose.Schema;

var courseSchema = new schema ({
    name:String,
    Lname:String,
    email:String,
    password:String,
    gender:String,
    re_password:String,
    Age:Number,
    Height:Number,
    Weight:Number,
    PhoneNumber:Number
    // Blood:String,
    // Address:String
});

var collection = mongoose.model("bloodmanagementsystem",courseSchema);
module.exports = collection;