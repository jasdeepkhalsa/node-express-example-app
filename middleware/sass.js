const path = require('path')
const sassMiddleware = require('node-sass-middleware')

module.exports = sassMiddleware({
  src: path.dirname(require.main.filename),
  dest: path.join(path.dirname(require.main.filename), 'public'),
  debug: true,
  outputStyle: 'compressed',
})