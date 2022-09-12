const express = require('express')
const Task = require('../models/task')
const router = express.Router()

router.post('/', async (req, res)=>{
    const task = new Task(req.body)
    try {
        await task.save()
        res.status(201).send(task)
    } catch(error){
        res.status(400).send(error)
    }
})

router.get('/', async (req, res) => {
    try {
        const task = await Task.find({})
        res.send(task)
    } catch (error) {
        res.status(500).send(error)
    }
})

router.get('/:id', async (req, res) => {
    const _id = req.params.id
    try {
        const task = await Task.findById(_id)
        if (!task) { return res.status(404).send() }
        res.send(task)
    } catch (error) {
        res.status(500).send(error)
    }
})

router.patch('/:id', async (req, res) => {
    const updates = Object.keys(req.body)
    const allowedUpdates = ['description','completed']
    const isValidOperation = updates.every((update) => allowedUpdates.includes(update) )

    if (!isValidOperation) {
        return res.status(400).send({ error: 'Invalid updates!'})
    }

    try {
        const task = await Task.findById(req.params.id)
        if (!task) { 
            res.status(404).send() 
        }
        updates.forEach((update) => task[update] = req.body[update] )
        await task.save()
        res.send(task)
    } catch (error) {
        res.status(400).send(error)
    }
})

router.delete('/:id', async (req, res) => {
    try {
        const task = await Task.findByIdAndDelete(req.params.id)
        if (!task){
            res.status(404).send() 
        }
        res.send(task)
    } catch (error) {
        res.status(500).send(error)
    }
})

module.exports = router