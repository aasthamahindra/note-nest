const { Schema, model } = require('mongoose');

const noteSchema = new Schema({
    title: { type: String, required: true },
    content: { type: String, require: true },
    category: {
        type: String,
        enum: ['Wishlist', 'Assignment', 'Projects', 'Work', 'Study', 'Others'],
        required: true,
    },
},
{ timestamps: true });

const Notes = model('notes', noteSchema, 'notes')

module.exports = { Notes };