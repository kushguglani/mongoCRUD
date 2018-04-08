const {MongoClient,ObjectId} = require('mongodb');

MongoClient.connect("mongodb://localhost:27017/TodoApp",(err,db)=>{
    if(err)
        return console.log("Unable to connect to mongo db"+err);
    console.log("Connected to mongodb");
    db.collection('notes').find().toArray().then((result)=>{
        // console.log(JSON.stringify(result,undefined,2));
    },(err)=>{
        console.log("Unable to fetch"+err);
    })
    db.collection('notes').find({title:"My first note "}).toArray().then((result)=>{
        console.log(result);
    },(err)=>{
        console.log(err);
    })
})