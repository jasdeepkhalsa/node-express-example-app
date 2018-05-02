const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
  res.format({
    text: () => {
      res.send('hey')
    },

    html: () => {
      res.send('<p>hey</p>')
    },

    json: () => {
      res.send({ message: 'hey' })
    },
  })
})

module.exports = router