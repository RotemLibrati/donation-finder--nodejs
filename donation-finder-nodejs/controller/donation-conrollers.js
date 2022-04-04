const Donation = require('../models/donation');
const mongoose = require('mongoose');


const getName = (req, res) => {
    res.json(200);
}
const setName = (req, res) => {
    const createDonation = new Donation( req.body.donation );
    createDonation.save().then(() => {
        res.status(200).json(req.body.donation)
    })
    .catch((error) => {
        res.status(500).json({error});
    })
};

exports.getName = getName;
exports.setName = setName;
