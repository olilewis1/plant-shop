const express = require('express') 
const plantsConrtroller = require('../controllers/plantsController')

const router = express.Router()

router.route('/plants')
 .get(plantsConrtroller.plants_get_all)
 .post(plantsConrtroller.plants_create)

router.route('/plants/:id')
 .get(plantsConrtroller.plants_get_byID)
 .delete(plantsConrtroller.delete_show)
module.exports = router