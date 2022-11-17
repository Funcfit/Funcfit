const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Joi = require("joi");

// Create schema for user
const UserSchema = new Schema({
  username: {
    type: String,
    required: [true, 'Username is required'],
    unique: [true, 'Username should be unique'],
  },
  email: {
    type: String,
    required: true
 },
 password: {
    type: String,
    required: true
 }
},{
 timestamps: true,
 collection: 'users'
});

// Create model for user
const User = mongoose.model('user', UserSchema);

const validate = (user) => {
    const schema = Joi.object({
        email: Joi.string().email().required(),
        password: Joi.string().required(),
    });
    return schema.validate(user);
};

module.exports = { User, validate };