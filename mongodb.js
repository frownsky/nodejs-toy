const { MongoClient, ObjectID, ObjectId } = require('mongodb')

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-account'

MongoClient.connect(connectionURL, { useNewUrlParser: true }, (error, client) => {
    if (error) { return console.log('Unable to connect to database!') }  
    console.log('Connected correctly!')
    
    const db = client.db(databaseName)

    // Delete Many
    // db.collection('users').deleteMany({
    //     age: 26
    // }).then((result)=>{
    //     console.log(result)
    // }).catch((error)=>{
    //     console.log(error)
    // })
    
    // Delete One
    db.collection('tasks').deleteOne({
        description: "Search Pen"
    }).then((result)=>{
        console.log(result)
    }).catch((error)=>{
        console.log(error)
    })
    
})


