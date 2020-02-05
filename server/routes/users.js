const express = require('express');
const router = express.Router();
const User = require('../models/User');
const mongoose = require('mongoose');

// mongoose.connect('mongodb://localhost:27017/users', { useNewUrlParser: true, useUnifiedTopology: true });


router.get('/', (req, res) => {
    User
        .find()
        .then(users => {
            res.status(200).json(users);
        });
});

router.get('/:id', (req, res) => {
    User
        .findById(req.params.id)
        .then(users => {
            res.status(200).json(users);
        });
});

router.post('/', (req, res) => {
    const newUser = new User({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
    });
    newUser.save()
        .then(users => {
            res.send("item saved to database");
        })
        .catch(err => {
            res.status(400).send("unable to save to database");
        });
});


router.put('/:id', (req, res) => {
    User
        .findByIdAndUpdate(req.params.id,
            {
                firstName: req.body.firstName,
                lastName: req.body.lastName,
                email: req.body.email,
            })
        .then(users => {
            res.status(204).json(users);
        });
});

router.delete('/:id', (req, res) => {
    User
        .findByIdAndRemove(req.params.id)
        .then(users => {
            if (users) {
                res.status(200).json(users);
            } else {
                res.status(500)
            }
        });
});

module.exports = router;