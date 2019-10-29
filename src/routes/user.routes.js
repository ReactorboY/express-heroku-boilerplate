const router = require('express').Router()

router.get('/',(req,res) => {
    res.send('Good')
})

module.exports = router