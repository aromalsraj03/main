const mongoose = require("mongoose");

//connecting to data base
mongoose.connect("mongodb+srv://aromalsraj03:aromal@cluster0.hyaly2t.mongodb.net/").then(()=>{
    console.log("mongodb connected");
})
.catch(()=>{
    console.log("failed");
})


//Scheme creation
const schemaer = mongoose.Schema;

var courseSchema = new schemaer ({
    name:String,
    age:Number,
    email:String,
    phone:Number,
    bloodGroup:String,
    purpose:String,
    ailments:String,
    unit:Number
});

var blood = mongoose.model("admin",courseSchema);
module.exports = blood;