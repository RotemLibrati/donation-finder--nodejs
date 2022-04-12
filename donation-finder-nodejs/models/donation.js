const mongoose = require('mongoose'); 

const Schema = mongoose.Schema;

const donationSchema = new Schema({
    creator: { type: String, required: true },
    description: { type: String, required: true, minlength:6 },
    typeDonation : {type: String, required: true },
    location : {type: JSON, required: true },
});

module.exports = mongoose.model("donations", donationSchema);