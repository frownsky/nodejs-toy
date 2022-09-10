const { MongoClient, ObjectID, ObjectId } = require('mongodb')

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-account'

MongoClient.connect(connectionURL, { useNewUrlParser: true }, (error, client) => {
    if (error) { return console.log('Unable to connect to database!') }  
    console.log('Connected correctly!')
    
    const db = client.db(databaseName)

    // Search One by content or ID
    // db.collection('users').findOne( { name: 'Alice', age: 28}, (error, user) =>{
    //     if (error) { return console.log('Unable to fetch!') }  
    //     console.log(user)
    // })
    // db.collection('users').findOne( { _id: ObjectId("631c4a379aff45918542379e") }, (error, user) =>{
    //     if (error) { return console.log('Unable to fetch!') }  
    //     console.log(user)
    // })
    
    // Get users with age = 26
    // db.collection('users').find({ age: 26 }).toArray((error, users) => {
        //     console.log(users)
        // })
        
    // Count users with age = 26
    // db.collection('users').countDocuments({ age: 26 },(error, count) => {
        //     console.log(count)
    // })
    
    // Find users with age > 30
    // db.collection('users').find({ age: { $gt: 30 } }).toArray((error,users) => {
    //     console.log(users)
    // })
    
    // Find users with age = {x : x is [27,30]}
    // db.collection('users').find(
    //     { $and: [
    //         { age : {$gte: 27} },
    //         { age : {$lte: 30} },
    //     ] 
    //     } )
    // .toArray((error,users) => {
    //     console.log(users)
    // })

})


