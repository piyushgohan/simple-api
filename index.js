var express = require("express");
var app = express();
var mongoose = require("mongoose");

app.use(express.json());

mongoose.connect('mongodb://localhost:27017/playground',{ useNewUrlParser: true , useUnifiedTopology: true });

var devices = mongoose.Schema({
    id: Number,
    name: String,
    date: String,
    status: String,
});

var deviceModel = mongoose.model('devices',devices);

app.get('/home', async (req,res) => {
    const result =  await deviceModel.find();
    res.status(200).json(result);
})

app.get('/movie', async (req,res) => {
    const result =  await deviceModel.find();
    res.status(200).json(result);
})

app.get('/cricket', async (req,res) => {
    const result =  await deviceModel.find();
    res.status(200).json(result);
})

app.post('/update', (req,res) => {

    var newDevice =  new deviceModel({
        id: req.body.id,
        name: req.body.name,
        date: req.body.date,
        status: req.body.status,
    })

    newDevice.save(function(err,newDevice) {
        if(err){
            res.send(err);
        }
        else{
            res.send({devices : newDevice});
        }
    });
});

app.listen(3000);