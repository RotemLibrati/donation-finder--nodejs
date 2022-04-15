const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require("mongoose");
const donationRoutes = require('./routes/donation-routers');
require('dotenv').config();
const HttpError = require('./models/http-error');
const morgan = require('morgan');



const app = express();
app.use(morgan("dev"));
app.use(bodyParser.json());

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers',
        'Origin, X-Requested-With, Content-Type, Accept, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PATCH, DELETE')
    next();
});

app.use('/api/donation', donationRoutes);
app.use((req, res, next) => {
    const error = new HttpError("Could not find this route.", 404);
    throw error;
});

app.use((error, req, res, next) => {
    if (res.headerSent) {
        return next(error);
    }
    res.status(error.code || 500)
    res.json({ message: error.message || 'An unknown error' })
});

mongoose
    .connect(`mongodb+srv://${process.env.MONGO_USERNAME}:${process.env.MONGO_PASSWORD}@article-api.oqplf.mongodb.net/DonationFinder?retryWrites=true&w=majority`)
    .then(() => {
        app.listen(5000);
    })
    .catch(error => {
        console.log(error);
        console.log(error);
    });