const {MongoClient,ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db)=>{
    if(err)
        return console.log("unable to connect");
    console.log("Connected to mongo db");
    // db.collection('notes').deleteMany({title:"My first note "}).then((result)=>{
    //     console.log(result);
    // });
    db.collection('notes').findOneAndDelete({_id:new ObjectID('5aca1b3cb7c3e5fafd85557f')}).then((result)=>{
        console.log(result);
    });
});