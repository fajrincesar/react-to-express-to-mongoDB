const express = require('express')
const app = express();

var MongoClient = require('mongodb').MongoClient;
var url = 'mongodb://rin2:12345@localhost:27017/purwadhika';

MongoClient.connect(url, function(err, db){
    console.log('connceted to mongodb')
});

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
        var data = {nama:'bag', count:42, brand:'lojel'};
        var collection = db.collection('item');
        collection.insert(data, (err, result)=>{
            console.log(result);
            res.send(result);
        });
    });
});

app.listen(4330, ()=>{
    console.log('server run on 4330')
})