const Donation = require('../models/donation');
const mongoose = require('mongoose');

const setName = (req, res) => {
    let name = "Rotem";
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

exports.setName = setName;