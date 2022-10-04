
import Page from '../models/page.js'

// get all pages 
export const getAllPages = async (_req, res) => { 
  const pages= await Page.find()
  return res.status(200).json(pages)
}

export const createPage = async (req, res) => { 
  try { 
    const pageToCreate = { ...req.body, owner: req.currentUser._id }
    console.log('New page', pageToCreate, req.currentUser._id)
     await Page.create(pageToCreate)
  return res.status(202).json('Hey hey page to created')
  } catch(err) { 
    return res.status(422).json(err)
  }
}


//get one page 

export const getOnePage = async (req, res) => { 
  try { 
    const { id } = req.params 
    const onePage = await Page.findById(id)
    console.log(onePage)
    if(!onePage) throw new Error() 
    return res.status(200).json(onePage)
  } catch (err) { 
    console.log(err)
    return res.status(404).json({ 'message': 'Not found' })
  }
}
//update 
export const updatePage = async (req, res) => { 
  try { 
    const { id } = req.params
    const pageToUpdate = await Page.findById(id)
   if (!pageToUpdate) throw new Error()
   if(!pageToUpdate.owner.equals(req.currentUser._id)) throw new Error('Unauthorized')
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
    const pageToDelete = await Page.findById(id)
    if(!pageToDelete) throw new Error()
     if(!pageToDelete.owner.equals(req.currentUser._id)) throw new Error('Unauthorized')
    await pageToDelete.remove()
    return res.status(204).json({ 'message': 'Item deleted'})
    
  } catch (err){ 
    console.log(err)
    return res.status(404).json({ 'message': 'Not found'})
  }
}