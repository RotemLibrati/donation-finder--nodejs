const Donation = require('../models/donation');
const mongoose = require('mongoose');
const HttpError = require('../models/http-error');
const { validationResult } = require('express-validator');


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

const setNewDonation = async (req, res, next) => {
    
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return next(new HttpError('Invalid inputs passed, please check your data', 422));
    }
    // const newDonation = new Donation( req.body.donation );
    const { creator, description, typeDonation, location } = req.body.donation;
    console.log(creator);
    const createDonation = new Donation({
        creator,
        description, 
        typeDonation, 
        location
    });
    try {
        await createDonation.save();
    }
    catch (err){
        console.log(err.message);
        const error = new HttpError('Create donation failed, Please try again', 500);
        return next(error);
    };
    res.status(201).json({donation: createDonation.toObject({getters: true})});
};

exports.getName = getName;
exports.getAllDonations = getAllDonations
exports.setNewDonation = setNewDonation;
