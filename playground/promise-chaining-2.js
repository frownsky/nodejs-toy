require('../src/db/mongoose')
const Task = require('../src/models/task')

// Find one task by id and delete, then count tasks with completed == false
// Task.findByIdAndDelete('631c96e280206a083c9abc22').then((task) => {
//     console.log(task)
//     return Task.countDocuments({ completed: false })
// }).then((result) => {
//     console.log(result)
// }).catch((error) => {
//     console.log(error)
// })

// Find one tasks by id and delete, then count tasks with completed == false: Async/Await version 
const deleteTaskAndCount = async (id) => {
    const task = await Task.findByIdAndDelete(id)
    const count = await Task.countDocuments({ completed: false })
    return count
}

deleteTaskAndCount('631eda0ffc387c6e8ab41cc1').then((count) => {
    console.log(count)
}).catch((error) => {
    console.log(error)
})