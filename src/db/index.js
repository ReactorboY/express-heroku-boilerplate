const mongoose = require('mongoose')

const startDatabase = () => {
    mongoose.connect(process.env.DB_CONNECTION, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }).then(() => console.log('Connected to mongodb'))
    .catch(err => {
        console.log(err)
        process.exit()
    })
}

module.exports = startDatabase