// const mongodb = require('mongodb')
// const MongoClient = mongodb.MongoClient
// const ObjectID = mongodb.ObjectId

const { MongoClient, ObjectID, ObjectId } = require('mongodb')

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-account'

// const id = new ObjectId()
// console.log(id)
// console.log(id.getTimestamp())

MongoClient.connect(connectionURL, { useNewUrlParser: true }, (error, client) => {
    if (error) { return console.log('Unable to connect to database!') }  
    console.log('Connected correctly!')

    const db = client.db(databaseName)

    // Insert One
    // db.collection('users').insertOne({
    //     name: 'Bob',
    //     age: 29
    // }, (error, result) => {
    //     if (error) { return console.log('Unable to insert user') }
    //     console.log(result.insertedId)
    // })

    // db.collection('users').insertOne({
    //     _id: id,
    //     name: 'Scarlet',
    //     age: 26
    // }, (error, result) => {
    //     if (error) { return console.log('Unable to insert user') }
    //     console.log(result.insertedId)
    // })
    
    // Insert Many
    // db.collection('users').insertMany([
    //     { name: 'Grace', age: 34 },
    //     { name: 'Dorothy', age: 39 }
    // ],(error, result)=>{
    //     if (error) { return console.log('Unable to insert documents') }
    //     console.log(result.insertedIds)
    // })
    
    // Example
    // db.collection('tasks').insertMany([
    //     { description: 'Distance Run', completed: false },
    //     { description: 'Eat Breakfast', completed: true },
    //     { description: 'Meet Parents', completed: true },
    // ],(error, result)=>{
    //     if (error) { return console.log('Unable to insert documents') }
    //     console.log(result.insertedIds)
    // })


})


