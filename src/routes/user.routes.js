const router = require('express').Router()
const mongoose = require('mongoose')
const User = require('../models/user.model')
const Post = require('../models/post.model')

router.post('/',(req,res) => {
    const {name} = req.body
    const user = new User({
        _id: new mongoose.Types.ObjectId(),
        name,
    })

    user.save((err) => {
        if (err) throw err
        const post = new Post({
            title:'Hussain',
            user: user._id
        })
        post.save()
            .then(user => console.log(user))
            .catch(err => console.log(err))
    })
})

module.exports = router