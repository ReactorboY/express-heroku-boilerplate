const mongoose = require('mongoose')

const postSchema = mongoose.Schema({
    user: {
        type:mongoose.Schema.Types.ObjectId,
        ref:'User'
    },
    title: String,
    content:String
})

module.exports = mongoose.model('Post', postSchema,'Post')