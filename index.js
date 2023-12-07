const  express = require("express");
const app = express();
const mongoose = require('mongoose');
const ProblemModel = require('./models/Problem');
const cors = require("cors");


app.use(express.json());
app.use(cors());

mongoose.connect("mongodb+srv://qlm5011:Password123@cluster10.jmhzyjc.mongodb.net/apt?retryWrites=true&w=majority");

app.get("/getProblems", async (req, res) => {
    try {
        const result = await ProblemModel.find({});
        res.json(result);
    } catch (err) {
        res.json(err);
    }
});

app.put("/UpdateStatus", async (req, res) => {

    const newStat = req.body.newStat;
    const id = req.body.id;
    console.log(newStat,id);
    
    try {
        await ProblemModel.findById(id, (error, StatToUpdate)=> {
    
            StatToUpdate.Status = newStat;
            StatToUpdate.save();
        });
        
    } catch (err) {
        console.log(err);
        
    }
    res.send("updated!");
    
    
    });



app.listen(3001, () =>{
    console.log("server runs!");
    });