import express from 'express'
import { plants_create, plants_get_byID, plants_get_all, delete_plant } from '../controllers/plantsController.js'
import {getUserProfiles} from '../controllers/user.js'
import { registerUser, loginUser} from '../controllers/auth.js'
import {getAllPages, createPage, updatePage, deletePage, getOnePage } from '../controllers/page.js'
import { secureRoute } from '../config/secureRoute.js'

const router = express.Router()

router.route('/plants')
 .get(plants_get_all)
 .post(plants_create)

router.route('/plants/:id')
 .get(secureRoute, plants_get_byID)
 .delete(delete_plant)



router.route('/user')
  .get(getUserProfiles)
router.route('/register')
  .post(registerUser)
router.route('/login')
  .post(loginUser)

  //pages 
router.route('/pages')
  .get(getAllPages)
  .post(secureRoute, createPage)

router.route('/pages/:id')
  .put(updatePage)
  .delete(secureRoute, deletePage)
  .get(getOnePage)
  export default router