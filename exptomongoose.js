const express = require('express')
const app = express();

var mongoose = require('mongoose');
var member = require('./models/member');
var url ='mongodb://rin2:12345@localhost/purwadhika'

mongoose.connect(url, ()=>{
    console.log('connceted to mongoDB')
});

app.get('/get', function(req,res){
    member.find((err, succ)=>{
        res.send(succ);
    })
})
app.get('/get/:nama', function(req, res){
    member.find({nama:req.params.nama},(err, succ)=>{
        res.send(succ);
    })
})

app.post('/post', function(req,res){
    new member({
        nama:'ve',
        usia:23,
        kota:'jakarta'
    }).save().then((newmember)=>{
        console.log('data coming: '+newmember);
        res.send('data coming:<br>'+newmember);
    })
});
app.listen(352, ()=>{
    console.log('running on port 352');
});
