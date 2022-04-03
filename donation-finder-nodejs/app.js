const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require("mongoose");
const donationRoutes = require('./routes/donation-routers');

const app = express();
app.use(bodyParser.json());

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers',
        'Origin, X-Requested-With, Content-Type, Accept, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PATCH, DELETE')
    next();
});

app.use('api/donation', donationRoutes)

mongoose
    .connect(`mongodb+srv://manu:Rotem889@youtube-articles-api.rjqtk.mongodb.net/mern?retryWrites=true&w=majority`)
    .then(() => {
        app.listen(5000);
        console.log(`${process.env.MONGO_USERNAME}`)
        //process.env.MONGO_USERNAME
    })
    .catch(error => {
        console.log(error);
    });