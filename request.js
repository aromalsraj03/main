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
    name: { type: String, required: true },
    age: { type: Number, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    bloodGroup: { type: String, required: true },
    purpose: { type: String, required: true },
    bloodUnitsRequired: { type: Number },
    ailments: { type: String },
});

var blood = mongoose.model("requests",courseSchema);
module.exports = blood;