const Donation = require('../models/donation');
const mongoose = require('mongoose');
const HttpError = require('../models/http-error');
const { validationResult } = require('express-validator');
const { setNewDonationService, getAllDonationsService } = require('../service/donation');

const getAllDonations = (req, res) => {
    getAllDonationsService()
    .then((donations) => {
        res.status(200).json({
            donations
            })
        })
        .catch((error) => {
            res.status(500).json({
                error
            })
        })
}

const setNewDonation = async (req, res, next) => {
    try{
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return next(new HttpError('Invalid inputs passed, please check your data', 422));
        }

        const { creator, description, typeDonation, location, website, organization, phone } = req.body.donation;
        setNewDonationService({
            creator,
            description,
            typeDonation,
            location,
            website,
            organization,
            phone
        }).then((createDonation) => res.status(201).json({ donation: createDonation.toObject({ getters: true }) }) )
        
    }catch(err) {
        const error = new HttpError('Create donation failed, Please try again', 500);
        return next(error);
    };
    
};

exports.getAllDonations = getAllDonations
exports.setNewDonation = setNewDonation;
