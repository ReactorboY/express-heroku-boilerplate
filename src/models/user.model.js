const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    name: String,
    posts: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Post'
    }]
})

module.exports = mongoose.model('User', userSchema, 'User')