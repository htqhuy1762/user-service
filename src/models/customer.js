const mongoose = require('mongoose');

// Schema định dạng hình thù của data
const customerSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
        address: String,
        phone: String,
        email: String,
        image: String,
        description: String,
    },
    { timestamps: true },
);
const Customer = mongoose.model('Customer', customerSchema);

module.exports = Customer;
