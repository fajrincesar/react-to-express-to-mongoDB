const express = require('express')
const app = express();
var cors = require('cors');
app.use(cors());
var bodyParser = require('body-parser');

var MongoClient = require('mongodb').MongoClient;
var url = 'mongodb://rinchan:121412@ds231739.mlab.com:31739/dbs';

MongoClient.connect(url, function(err, db){
    console.log('connceted to mongodb')
});

app.use(bodyParser.json());
app.get('/data', (req, res)=>{
    MongoClient.connect(url, (err, db)=>{
        var collection = db.collection('item');
        collection.find({}).toArray((err, docs)=>{
            console.log(docs);
            res.send(docs);
        });
    });
});

app.post('/data', (req, res)=>{
    MongoClient.connect(url, (err, db)=>{
        var data = {nama:req.body.nama, usia:req.body.usia, kota:req.body.kota};
        var collection = db.collection('item');
        collection.insert(data, (err, result)=>{
            console.log(result);
            res.send({
                type:'POST', 
                nama:req.body.nama, 
                usia:req.body.usia,
                kota:req.body.kota
            });
        });
    });
});

app.listen(433, ()=>{
    console.log('server run on 433')
})