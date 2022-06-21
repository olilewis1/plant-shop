
import  User from '../models/user.js'

// * Users INDEX Route
 export const getUserProfiles = async (_req, res) => {
  const userProfiles = await User.find()
  return res.status(200).json(userProfiles)
}

