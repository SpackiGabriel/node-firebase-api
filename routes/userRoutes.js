// Importing libraries
const db = require('../config')
const router = require('express').Router()

// Setting routes

// Create a new user
router.post('/', async (req, res) => {

    try {
        const user = {
            name: req.body.name,
            email: req.body.email,
            password: req.body.password
        }

        const query = await db.collection("users").add(user)

        res.status(201).send({
            code: 201,
            message: "Sucessfully created new user!",
            user
        })
    }

    catch (error) {
        res.send(error)
    }

})

// Read all users
router.get('/', async (req, res) => {
    try {
        const query = await db.collection("users").get()

        let users = []

        query.forEach(doc => {
            users.push(doc.data())
        })

        res.status(200).send({
            code: 200,
            message: "Collection found!",
            users
        })
    }

    catch (error) {
        res.send(error)
    }
})

// Read a unique user using ID
router.get('/:id', async (req, res) => {
    try {
        const query = await db.collection("users").doc(req.params.id).get()
        res.send(query.data())
    }

    catch (error) {
        res.send(error)
    }
})

// Update user
router.patch('/', async (req, res) => {
    try {
        const query = await db.collection("users").doc(req.body.id).update(req.body.content)
        res.status(200).send({
            code: 200,
            message: "Successfully updated user!"
        })
    }
    catch (error) {
        res.send(error)
    }
})

// Delete user
router.delete('/', async (req, res) => {
    try {
        const query = await db.collection("users").doc(req.body.id).delete()
        
        res.status(200).send({
            code: 200,
            message: "Successfully deleted user!"
        })
    }

    catch (error) {
        res.send(error)    
    }
})


// Exporting router
module.exports = router