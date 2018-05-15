const express = require('express')
const router = express.Router()
const fetch = require('node-fetch')

router.get('/', async (req, res) => {
  try {
     const response = await fetch('https://api.github.com/gists/public')
     const data = await response.json()
     const output = data.map((item) => item.url)
     res.send(output)
  } catch (error) {
    console.log('there was an error', error)
    return res.status(404).send()
  }
})

module.exports = router