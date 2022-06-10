
const Donation = require('../models/donation');

const setNewDonationService = async(donation) => {
    const createDonation = new Donation(donation);
    console.log(createDonation)

    await createDonation.save();

    return createDonation;
}

const getAllDonationsService = () => {
    return Donation.find()
    
};

exports.setNewDonationService = setNewDonationService;
exports.getAllDonationsService = getAllDonationsService;

