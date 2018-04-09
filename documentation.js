var MongoClient = require('mongodb').MongoClient;
var url = 'mongodb://rin2:12345@localhost:27017/purwadhika';

MongoClient.connect(url, function(err, db){
    if (err) throw err;
    console.log("DB is Connected");
    inputdata(db, function(){
        finddata(db, function(){
            updatedata(db, function(){
                removedata(db, function(){
                    db.close();
                });
            });
        });
    });
});

var inputdata = function(db, callback){
    var collection = db.collection('item');
    collection.insertMany(
        [{nama:'cable', count:100, brand:'panduit'},
         {nama:'bag', count:25, brand:'bodyack'},
         {nama:'headphone', count:17, brand:'sony'}],
        function(err, result){
            console.log('succesed')
            callback(result)
        });
}
var finddata = function(db, callback){
    var collection = db.collection('item');
    collection.find({brand:'panduit'}).toArray(function(err, docs){
        console.log('here is all data that has been saved')
        console.log(docs)
        callback(docs);
    });
}
var updatedata = function(db, callback){
    const collection = db.collection('item');
    collection.updateOne({nama:'speaker'},
    {$set: {count:4}}, (err, out)=>{
        console.log('update successfull');
        callback(out);
    });
}
var removedata = function(db, callback){
    const collection = db.collection('item');
    collection.deleteOne({nama:'bag'}, (err, out)=>{
        console.log('remove successfull');
        callback(out);
    });
}