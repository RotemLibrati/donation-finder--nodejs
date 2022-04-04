const express = require('express');

const router = express.Router();
const donationController = require('../controller/donation-conrollers');



router.get('/', donationController.getName);
//router.post('/', donationController.setName);
router.post('/', donationController.setName);

module.exports = router;