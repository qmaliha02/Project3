const mongoose = require("mongoose");

const TenantSchema = new mongoose.Schema({
ID: {
    type: Number,
    required: true,
},
Name: {
    type: String,
    required: true,
},
Phone_Number: {
    type: Number,
    required:true,
},
Email: {
    type:String,
    required:true,
},
Date_of_CheckIn :{
    type: Date,
    required:true,
},
Date_of_CheckOut : {
    type: Date,
    required: true,
},
Apt_Num : {
    type: Number,
    required:true,
},
});

const TenantModel = mongoose.model("tenants", TenantSchema);
module.exports = TenantModel;