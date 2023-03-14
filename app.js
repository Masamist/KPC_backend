const express = require('express')
const projectRouter = require('./routes/projectRoutes')

const app = express()


app.use(express.json())
app.use(express.static(`${__dirname} / public`))

app.use((req, res, next) => {
  next()
})

app.use((req, res, next) => {
  req.requestTime = new Date().toISOString()
  console.log(req.headers)
  next()
})

// ROUTES
module.exports = app
