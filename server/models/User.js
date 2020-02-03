const mongoose = require('mongoose');
            const Schema = mongoose.Schema;
                
            // Creates a new Mongoose Schema with two properties
            const UserSchema = new Schema({
                firstName: { type: String, required: true},
                
                // New property
                social: {
                    facebook: { type: String, required: false },
                    twitter: { type: String, required: false },
                    linkedIn: { type: String, required: false }
                }
            });

    module.exports = mongoose.model('User', UserSchema);

            