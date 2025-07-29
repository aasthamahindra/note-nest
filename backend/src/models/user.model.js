const { Schema, model } = require('mongoose');

const userSchema = new Schema({
    name: { type: String},
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true }
});

const Users = model('users', userSchema, 'users')

module.exports = { Users };