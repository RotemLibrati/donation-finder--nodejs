const Donation = require('../models/donation');
const mongoose = require('mongoose');


const getName = (req, res) => {
    res.json(200);
}
const setName = (req, res) => {
    let name = req.params.name;
    const createDonation = new Donation({
        name
    });
    createDonation.save().then(() => {
        res.status(200).json({name})
    })
    .catch((error) => {
        res.status(500).json({error});
    })
};

exports.getName = getName;
exports.setName = setName;
