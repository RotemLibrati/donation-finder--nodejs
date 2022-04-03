const express = require('express');

const router = express.Router();
const donationController = require('../controller/donation-conrollers');



router.post('/', donationController.setName);

module.exports = router;