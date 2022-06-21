import Plants from '../models/project.js'


export const plants_get_all = (req, res) => { 
  Plants.find()
  .then(result => { 
    res.status(200).send(result)
  })
  .catch(err => { 
    res.status(400).send('There is an error while loading all plants')
  })


}


export const plants_get_byID = async (req, res) => { 
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

export const plants_create = (req, res) => {
  const plants = new Plants(req.body);
  plants.save()
      .then(result => {
          res.status(201).send(result);
      })
      .catch(err => {
          res.status(400).send(err);
      });
}

export const delete_plant = async (req, res) => { 
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

