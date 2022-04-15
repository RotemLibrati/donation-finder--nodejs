const express = require('express');

const router = express.Router();
const donationController = require('../controller/donation-conrollers');



router.get('/', donationController.getAllDonations);
//router.post('/', donationController.setName);
router.post('/', donationController.setNewDonation);

module.exports = router;