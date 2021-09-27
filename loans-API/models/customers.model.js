const mongoose = require('mongoose');

const customerSchema = new mongoose.Schema({

    firstName :String,
    lastName :String,
    emailAddress : String,
    phoneNumber: String,
    dob :String,
    department : String
});

const customerModel = mongoose.model('Customers',customerSchema);
module.exports = customerModel;