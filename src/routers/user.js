const express = require('express')
const User = require('../models/user')
const router = express.Router()
const auth = require('../middleware/authentication')

// public route: the 'sign-up' route
router.post('/', async (req, res)=>{
    const user = new User(req.body)
    try {
        await user.save()
        const token = await user.generateAuthToken()
        res.status(201).send({ user, token })
    } catch (error) {
        res.status(400).send(error)
    }
})

// public route: login generates and stores an auth token and sends it back to you
router.post('/login', async (req, res) => {
    try {
        const user = await User.findByCredentials(req.body.email, req.body.password)
        const token = await user.generateAuthToken()
        res.send({ user , token})
    } catch (error) {
        res.status(400).send()
    }
})

// protected route: logout
router.post('/logout', auth, async (req, res) => {
    try {
        // return the tokens not used for authentication, also remove the token used to login
        req.user.tokens = req.user.tokens.filter((token) => {
            return token.token !== req.token
        })
        await req.user.save()
        res.send()
    } catch (error) {
        res.status(500).send()
    }
})

// protected route: logout all devices
router.post('/logoutAll', auth, async (req, res) => {
    try {
        req.user.tokens = []
        await req.user.save()
        res.send()
    } catch (error) {
        res.status(500).send()
    }
})

// protected route: included auth middleware
router.get('/me', auth, async (req, res) => {
    res.send(req.user)
})

// protected route
router.patch('/me', auth, async (req, res) => {
    const updates = Object.keys(req.body)
    const allowedUpdates = ['name','email','password','age']
    const isValidOperation = updates.every((update) => allowedUpdates.includes(update) )
    
    if (!isValidOperation) {
        return res.status(400).send({ error: 'Invalid updates!'})
    }
    try {
        updates.forEach((update) => req.user[update] = req.body[update] )
        await req.user.save()
        res.send(req.user)
    } catch (error) {
        res.status(400).send(error)
    }
})

router.delete('/me', auth, async (req, res) => {
    try {
        await req.user.remove()
        res.send(req.user)
    } catch (error) {
        res.status(500).send(error)
    }
})

module.exports = router