const { MongoClient, ObjectID, ObjectId } = require('mongodb')

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-account'

MongoClient.connect(connectionURL, { useNewUrlParser: true }, (error, client) => {
    if (error) { return console.log('Unable to connect to database!') }  
    console.log('Connected correctly!')
    
    const db = client.db(databaseName)

    // Update One
    // db.collection('users').updateOne({
    //     _id: new ObjectId("631c43712fbb8748221f6342")
    // }, {
    //     // set age to 26
    //     // $set: { age: 26 }

    //     // increment age ( positive or negative )
    //     $inc : { age: -1 }

    // }).then((result) => {
    //     console.log(result)
    // }).catch( (error) => {
    //     console.log(error)
    // })

    // Update Many: Update status in all tasks to true
    // db.collection('tasks').updateMany({
    //     // find those tasks with false
    //     completed: false
    // }, {
    //     // operations we want to perform for those found data
    //     $set: { completed: true }
    // }).then((result) => {
    //     console.log(result)
    // }).catch((error) => {
    //     console.log(error)

    // })

})


