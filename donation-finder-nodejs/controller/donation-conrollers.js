const Donation = require('../models/donation');
const mongoose = require('mongoose');


const getName = (req, res) => {
    res.json(200);
}

const getAllDonations = (req,res) => {
    Donation.find().then((donations) => {
        res.status(200).json({
            donations
        })
    }).catch((error) => {
        res.status(500).json({
            error
        })
    })
}

const setName = (req, res) => {
    console.log(req.body.donation)
    const createDonation = new Donation( req.body.donation );
    createDonation.save().then(() => {
        res.status(200).json(req.body.donation)
    })
    .catch((error) => {
        res.status(500).json({error});
    })
};

exports.getName = getName;
exports.getAllDonations = getAllDonations
exports.setName = setName;
