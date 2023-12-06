const  express = require("express");
const app = express();
const mongoose = require('mongoose');
const ProblemModel = require('./models/Problem');
const cors = require("cors");


app.use(express.json());
app.use(cors());

mongoose.connect("mongodb+srv://qlm5011:Password123@cluster10.jmhzyjc.mongodb.net/apt?retryWrites=true&w=majority");

app.post("/createRequest",async (req,res) => {
    const item =  req.body;
    const newItem = new ProblemModel (item);
    await newItem.save();

    res.json(item);

    
    });



app.listen(3001, () =>{
    console.log("server runs!");
    });