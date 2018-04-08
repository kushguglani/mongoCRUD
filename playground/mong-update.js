const {MongoClient,ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db)=>{
    if(err)
        return console.log("unable to connect");
    console.log("Connected to mongo db");
    db.collection('notes').findOneAndUpdate({
        title:'My last note '
    },{
        $set:{
            title:'My first Note'
        }
    },{
        returnOriginal : false
    }). then((result)=>{
        console.log(result);
    })
});