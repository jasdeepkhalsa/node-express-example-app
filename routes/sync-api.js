const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
  const content = 'Nice!'
  const suggestion = (header) => ` And did you try a request with the "Accept" header "${header}"?`

  res.format({
    text: () => {
      res.send(`${content}${suggestion('application/json')}`)
    },

    html: () => {
      res.send(`<p>${content}${suggestion('application/json')}</p>`)
    },

    json: () => {
      res.send({ message: `${content}${suggestion('text/html')}` })
    },
  })
})

const fs = require('fs')

router.get('/fs', async (req, res) => {
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