const mongoose = require('mongoose');
const Schema = mongoose.Schema;
                
            // Creates a new Mongoose Schema with two properties
const BlogSchema = new Schema({
    title: { type: String, require: true }, // firstName property is a string and required
    article: { type: String, require: true },
    published: { type: Date, require: true },
    featured: { type: Boolean, required: true },
    author: { type: Schema.Types.ObjectId, red: 'User', required: true }
});

module.exports = mongoose.model('Blog', BlogSchema);

            