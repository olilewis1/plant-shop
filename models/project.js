import mongoose from 'mongoose'

const Schema = mongoose.Schema


const plantsSchema = new Schema({ 
  plant_name: {type: String, required: true}, 
  plant_price: {type: Number, required: true }, 
  plant_picture_main: {type: String, required: true}, 
  plant_pictures: [String]
})

export default mongoose.model('Plants', plantsSchema)
