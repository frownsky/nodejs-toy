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

const jwt = require('jsonwebtoken')

const myFunction = async () => {
    // after console log, get the middle code and go to base64decode.org
    // we can expire the token after a certain amount of time
    const token = jwt.sign({_id: 'abc123'},'thisismynewcode', { expiresIn : '1 sec'})
    console.log(token)
    
    const data = jwt.verify(token,'thisismynewcode')
    console.log(data)
}

myFunction()

