const Customer = require('../models/customer');

const createCustomerService = async (customerData) => {
    try {
        let result = await Customer.create({
            name: customerData.name,
            address: customerData.address,
            phone: customerData.phone,
            email: customerData.email,
            image: customerData.image,
            description: customerData.description,
        });
        return result;
    } catch (error) {
        console.log('Error when create customer:', error);
        return null;
    }
};

const createArrayCustomerService = async (arr) => {
    try {
        let result = await Customer.insertMany(arr);
        return result;
    } catch (error) {
        console.log('Error when create array customer:', error);
        return null;
    }
};

const getCustomersService = async () => {
    try {
        let result = await Customer.find({});
        return result;
    } catch (error) {
        console.log('Error when get customers:', error);
        return null;
    }
};

module.exports = {
    createCustomerService,
    createArrayCustomerService,
    getCustomersService,
};
