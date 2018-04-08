const MongoClient = require('mongodb').MongoClient;
    console.log("hello");

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err,db)=>{
    if(err){
        return console.log(`Unable to connect to mongodb ${err}`);
    }
    console.log("connected to mongodb data base");

    db.collection('notes').insertOne({
        title:'My first note ',
        completed:false
    },(err,results)=>{
        if(err)
            return console.log('Unable to insert');
        console.log(`Inserted in database ${results}`)
    });
     db.close();
});