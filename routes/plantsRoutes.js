const express = require('express') 
const plantsConrtroller = require('../controllers/plantsController')

const router = express.Router()

router.get('/', plantsConrtroller.plants_get_all)

module.exports = router