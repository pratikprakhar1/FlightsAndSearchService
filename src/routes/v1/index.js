const express = require('express');
const CityController = require("../../controllers/city-controllers");


const router = express.Router();

router.post('/city',CityController.create);


module.exports = router; 