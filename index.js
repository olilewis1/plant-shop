

const mongoose = require('mongoose')
const express = require('express')
const cors = require('cors');


const plantsRoutes = require('./routes/plantsRoutes')
const bodyParser = require('body-parser')

const app = express()
const PORT = 3000

const dbURI = 'mongodb+srv://admin:flynn123@cluster0.h1o1d.mongodb.net/?retryWrites=true&w=majority'





mongoose.connect(dbURI, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(function(result) {
        console.log('Database is connected');
    })
    .catch((err) => console.log(err))




// apply cors policy 
app.use(cors())



app.listen(PORT, () => console.log(`Server is up and running on ${PORT}`))


app.use(bodyParser.json())

app.use('/', plantsRoutes)