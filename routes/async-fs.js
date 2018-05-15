const express = require('express')
const router = express.Router()
const fs = require('fs')

router.get('/', async (req, res) => {
  try {
     await fs.lstat('/app', (err, stats) => {
      const { size } = stats
      res.send(`file size is ${size}`)
    })
  } catch (error) {
    return res.status(500).send()
  }
})

module.exports = router