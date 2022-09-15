const express = require('express')
require('./db/mongoose')
const userRouter = require('./routers/user')
const taskRouter = require('./routers/task')

const app = express()
const port = process.env.PORT || 3000

// GET request disabled
// app.use((req, res, next) => {
//     if (req.method === 'GET'){
//         res.send('GET requests are disabled')
//     } else { 
//         next()
//     }
// })

// All requests disabled
// app.use((req, res, next) => {
//     res.status(503).send('ALL requests are disabled, Check back soon!')
// })

app.use(express.json())
app.use("/users", userRouter)
app.use("/tasks", taskRouter)

app.listen(port, ()=>{ console.log('Server is up on port '+ port )} )



