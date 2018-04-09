//another method connecting express to mongoDB using mongoose 
var mongoose = require('mongoose');
var member = require('./models/member');

mongoose.connect('mongodb://rin2:12345@localhost:27017/purwadhika', ()=>{
    console.log('connected to mongodb')
});

new member({
    nama: 've',
    usia: 23,
    kota: 'jakarta'
}).save().then((newmember)=>{
    console.log('data entry: '+newmember);
});
member.find({nama:'devi'}, (err, succ)=>{
    console.log(succ)
});