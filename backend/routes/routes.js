const express = require('express');
const router = express.Router();
const userController = require ('../controllers/userController');
const citizenController = require('../controllers/citizenController');


router.post('/votes/martians/create',citizenController.createCitizen_POST);
router.post('/votes/martians',citizenController.getCitizenKey_POST);
// router.get('/votes/gamecompany',citizenController.user_get);
router.post('/votes/gamecompany',userController.user_post);

module.exports = router;