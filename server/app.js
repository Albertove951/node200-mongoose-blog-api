const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

mongoose.connect('mongodc://localhost://localhost/my-blog', { useMongoClient: true});
mongoose.Promise = Promise;

applicationCache.use(bodyParser.json());

applicationCache.get('/', (req, res) => {
    res.status(200).send();
});

module.exports = app;

