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


const plants_get_byID = async (req, res) => { 
  try { const id = req.params.id
  const plant = await Plants.findById(id)
  if(!plant) { 
    throw new Error()
  }
  return res.status(200).json(plant)
} catch (err) { 
  console.log(err) 
  return res.status(404).json({message: 'This does not exist' })
}
}

const plants_create = (req, res) => {
  const plants = new Plants(req.body);
  plants.save()
      .then(result => {
          res.status(201).send(result);
      })
      .catch(err => {
          res.status(400).send(err);
      });
}

const delete_show = async (req, res) => { 
  try { 
    const { id } = req.params 
    const plantToDelete = await Plants.findById(id)
    if (!plantToDelete) throw new Error()
    await plantToDelete.remove()
    return res.status(204).json({ 'message': 'Item deleted' })
  } catch (err) { 
    console.log(err)
    return res.status(404).json({ message: err.message})
  }
}

module.exports = { 
  plants_get_all, 
  plants_create, 
  plants_get_byID, 
  delete_show
}