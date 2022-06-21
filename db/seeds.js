import mongoose from 'mongoose'
import Plants from '../models/project.js'
import User from '../models/user.js'
import plantData from '../db/data/plants.js'
import userData from '../db/data/users.js'
const dbURI = 'mongodb+srv://admin:flynn123@cluster0.h1o1d.mongodb.net/?retryWrites=true&w=majority'

const seedDatabase = async () => { 
  try { 
    await mongoose.connect(dbURI, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(function(result) {
        console.log('Database is connected');


    })
    .catch((err) => console.log(err))
    // * Clear the database
    await mongoose.connection.db.dropDatabase()
    console.log('🛩 DB Dropped')

    // add plants
    const plants = await Plants.create(plantData)
    console.log(`🌱 DB seeded with ${plants.length} plants`)

    // add users 
    const users = await User.create(userData)
    console.log(`🌱 DB seeded with ${users.length} users`)

    // close connection 
    await mongoose.connection.close()
    console.log('Db closed')
  }
  catch (err) { 
    console.log(err)
    await mongoose.connection.close()
    console.log('console closed')
  }
}

seedDatabase()