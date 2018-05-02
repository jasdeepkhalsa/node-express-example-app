const express = require('express')
const path = require('path')
const exphbs  = require('express-handlebars')

const router = express.Router()
const app = express()

// Some configuration from https://github.com/ericf/express-handlebars
app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')

app.use(require('./middleware'))

// http://expressjs.com/en/starter/static-files.html
app.use(express.static(path.join(__dirname, 'public')))

app.use(require('./routes'))

// listen for requests :)
const listener = app.listen(process.env.PORT, () => console.log('Your app is listening on port ' + listener.address().port))
