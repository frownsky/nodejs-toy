const express = require('express')
require('./db/mongoose')
const userRouter = require('./routers/user')
const taskRouter = require('./routers/task')

const app = express()
const port = process.env.PORT || 3000

app.use(express.json())
app.use("/users", userRouter)
app.use("/tasks", taskRouter)

app.listen(port, ()=>{ console.log('Server is up on port '+ port )} )

const Task = require('./models/task')
const User = require('./models/user')

const main = async () => {
    // const task = await Task.findById('6329b1afb2408c37ba8709e6')
    // await task.populate('owner')
    // console.log(task.owner)
    
    const user = await User.findById('6329b0adac268d9788bae8ca')
    await user.populate('tasks')
    console.log(user.tasks)
}

main()



