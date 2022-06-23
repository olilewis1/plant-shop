import Page from '../models/page.js'

// get all pages 
export const getAllPages = async (_req, res) => { 
  const pages= await Page.find()
  return res.status(200).json(pages)
}

export const createPage = async (req, res) => { 
  try { 
    const pageToCreate = await Page.create(req.body)
  console.log(pageToCreate)
  return res.status(202).json('Hey hey page to created')
  } catch(err) { 
    return res.status(422).json(err)
  }
}

//update 
export const updatePage = async (req, res) => { 
  try { 
    const { id } = req.params
    const pageToUpdate = await Page.findById(id)
   if (!pageToUpdate) throw new Error()
   Object.assign(pageToUpdate, req.body)
   await pageToUpdate.save()
   return res.status(202).json(pageToUpdate)
  } catch (err) { 
    console.log(err)
    return res.status(404).json({'message': 'Not Found'})
  }
} 

// delete 
export const deletePage = async (req, res) => { 
  try { 
    const { id } = req.params
    const pageToDelete = Page.findById(id)
    if(!pageToDelete) throw new Error()
    await pageToDelete.remove()
    return res.status(204).json({ 'message': 'Item deleted'})
    
  } catch (err){ 
    console.log(err)
    return res.status(404).json({ 'message': 'Not found'})
  }
}