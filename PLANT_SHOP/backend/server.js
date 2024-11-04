const express = require('express')
const mongoose = require ('mongoose')
const plantRoutes = require('./routes/plants')

require('dotenv').config()

//express app
const app = express()

// middleware
app.use(express.json())

app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})

//routes
app.use('/api',  plantRoutes)

//connect to db
mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    //listen for requests
    app.listen(process.env.PORT, () => {
    console.log('Connected to db & Server running on port', process.env.PORT)
})
  })
  .catch((error) => {
    console.log(error)
  })


