const { Plants } = require('../models/project')


const plants_get_all = (req, res) => { 
  Plants.find()
  .then(result => { 
    res.status(200).send(result)
  })
  .catch(err => { 
    res.status(400).send('There is an error while loading all plants')
  })


}

module.exports = { plants_get_all }