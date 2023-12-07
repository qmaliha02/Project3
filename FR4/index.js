const  express = require("express");
const app = express();
const mongoose = require('mongoose');
const TenantModel = require('./models/Tenants');
const cors = require("cors");


app.use(express.json());
app.use(cors());

mongoose.connect("mongodb+srv://qlm5011:Password123@cluster1.kyrrnfm.mongodb.net/files?retryWrites=true&w=majority");

app.get("/getTenant",async (req,res) => {
    try {
        const result = await TenantModel.find({});
        res.json(result);
    } catch (err) {
        res.json(err);
    }
});
app.post("/createTenant",async (req,res) => {
    const item =  req.body;
    const newItem = new TenantModel (item);
    await newItem.save();

    res.json(item);
    });
    
app.post("/deleteTenant", async (req,res) => {
        const {id }= req.body;
        try{
            itemsModel.deleteOne({_id: id}, function(err, res) {
                console.log(err);
            });
        } catch(error) {
            console.log(error);
            
        }
        
    
       
    });



app.listen(3001, () =>{
console.log("server runs!");
});