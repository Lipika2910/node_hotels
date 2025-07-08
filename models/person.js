const { uniqueId } = require('lodash');
const mongoose = require('mongoose');

const personSchema =  new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    age: {
        type: Number,
    },
    work: {
        type: String,
        enum: ['chef','waiter','manager'],
        reuired: true
    },
    mobile: {
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true,
        uniqueId: true
    },
    address: {
        type: Number,
    }
});

const Person = mongoose.model('Person', personSchema);
module.exports = Person;