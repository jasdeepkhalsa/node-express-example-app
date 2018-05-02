const express = require('express')
const router = express.Router()

// Other routes
router.use('/api', require('./api'))

// http://expressjs.com/en/starter/basic-routing.html
router.get('/', (req, res) => res.render('home', { name: req.query.name }))

module.exports = router