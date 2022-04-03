const mongoose = require('mongoose'); 

const Schema = mongoose.Schema;

const donationSchema = new Schema({
    name: { type: String, required: true }
});

module.exports = mongoose.model("donations", donationSchema);