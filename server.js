// server.js
const next = require('next')
const routes = require('./routes')
const dev = process.env.NODE_ENV !== 'production'
const port = process.env.PORT || 3000
const app = next({ dir: '.', dev })
const handler = routes.getRequestHandler(app)

var compression = require('compression');

// With express.js
const express = require('express')
app.prepare().then(() => {
  const server = express()
  server.use(handler)
  server.use(compression())
  server.listen(port)
})