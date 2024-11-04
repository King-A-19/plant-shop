const express = require('express')
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


//listen for requests
app.listen(process.env.PORT, () => {
    console.log('Server running on port', process.env.PORT)
})