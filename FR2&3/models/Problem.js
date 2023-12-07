const mongoose = require("mongoose");

const ProblemSchema = new mongoose.Schema({
reqid: {
    type: Number,
    required: true,
},
aptnum: {
    type: Number,
    required: true,
},
probarea: {
    type: String,
    required:true,
},
description: {
    type:String,
    required:true,
},
photo :{
    type: String,
    required:true,
},
status : {
    type: String,
    required: true,
},
date : {
    type: String,
    required:true,
},

});

const ProblemModel = mongoose.model("staff", ProblemSchema);
module.exports = ProblemModel;