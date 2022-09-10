const mongoose = require('mongoose')
const validator = require('validator')

mongoose.connect('mongodb://127.0.0.1:27017/task-account-api')

// User and Task model with validation and sanitization
const User = mongoose.model('User', {
    name: { 
        type: String, 
        required: true,
        trim: true
    },
    email:{
        type: String,
        required: true,
        trim: true,
        lowercase: true,
        validate(value){
            if (!validator.isEmail(value)){ throw new Error('Email is invalid') }
        }
    },
    password:{
        type: String,
        required: true,
        minlength: 7,
        trim: true,
        validate(value){
            if (value.toLowerCase().includes('password')){ throw new Error('Password cannot contain "password"')}
        }
    },
    age: { 
        type: Number,
        default: 0,
        validate(value) {
            if (value < 0){ throw new Error('Age must be a positive number') }
        }
    }

})

const Task = mongoose.model('Task', {
    description: { 
        type: String,
        required: true,
        trim: true
    },
    completed: { 
        type: Boolean,
        default: false
    }
})


// const me = new User({
//     name: '    Michael  ',
//     email: 'MICHAEL@mail.com     ',
//     password: '  re23456   ',
//     age: -1
// })

// me.save().then(()=>{
//     console.log(me)
// }).catch((error)=>{ 
//     console.log(error)
// })

// const task = new Task({
//     description: 'Eat Lunch    '
// })

// task.save().then(()=>{
//     console.log(task)
// }).catch((error)=>{ 
//     console.log('Error!',error)
// })

