const express = require('express')
const router = express.Router()

// Other routes
router.use('/sync-api', require('./sync-api'))
router.use('/async-fs', require('./async-fs'))
router.use('/async-github', require('./async-github'))

// http://expressjs.com/en/starter/basic-routing.html
router.get('/', (req, res) => res.render('home', { name: req.query.name }))

module.exports = router