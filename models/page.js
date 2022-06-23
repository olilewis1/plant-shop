import mongoose from 'mongoose'

const mainPictureSchema = new mongoose.Schema({
  image: { type: String, required: true}
})

const pageSchema = new mongoose.Schema({ 
  name: { type: String, required: true, unique: true},
  type: { type: String},
  mainPicture: [mainPictureSchema], 
  firstParagraph: {type: String, required: true}
})

export default mongoose.model('Page', pageSchema)